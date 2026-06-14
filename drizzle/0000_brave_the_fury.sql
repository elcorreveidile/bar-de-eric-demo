CREATE TABLE "eventos_programacion" (
	"id" serial PRIMARY KEY NOT NULL,
	"titulo" text NOT NULL,
	"slug" text NOT NULL,
	"tipo" text DEFAULT 'concierto' NOT NULL,
	"descripcion" text,
	"fecha" date NOT NULL,
	"hora" text,
	"artista_banda" text,
	"aforo_maximo" integer,
	"entrada_libre" boolean DEFAULT true,
	"precio_entrada" integer,
	"imagen" text,
	"estado" text DEFAULT 'programado',
	CONSTRAINT "eventos_programacion_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "galeria_fotos" (
	"id" serial PRIMARY KEY NOT NULL,
	"titulo" text NOT NULL,
	"descripcion" text,
	"url_foto" text NOT NULL,
	"banda" text,
	"anio" integer,
	"artista" text,
	"categoria" text DEFAULT 'conciertos',
	"orden" integer DEFAULT 0,
	"destacada" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "magic_tokens" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"token" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "magic_tokens_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "menu_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" text NOT NULL,
	"descripcion" text,
	"orden" integer DEFAULT 0,
	"activa" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE "menu_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" integer,
	"nombre" text NOT NULL,
	"slug" text NOT NULL,
	"descripcion" text,
	"receta" text,
	"precio" integer NOT NULL,
	"imagen" text,
	"historia_musicales" text,
	"alergenos" text[],
	"disponible" boolean DEFAULT true,
	"orden" integer DEFAULT 0,
	"banda" text,
	"anio" integer,
	CONSTRAINT "menu_items_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "mesas" (
	"id" serial PRIMARY KEY NOT NULL,
	"numero" integer NOT NULL,
	"capacidad" integer DEFAULT 4 NOT NULL,
	"ubicacion" text DEFAULT 'interior',
	"activa" boolean DEFAULT true,
	CONSTRAINT "mesas_numero_unique" UNIQUE("numero")
);
--> statement-breakpoint
CREATE TABLE "pedido_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"pedido_id" integer,
	"menu_item_id" integer,
	"cantidad" integer DEFAULT 1 NOT NULL,
	"precio_unitario" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pedidos" (
	"id" serial PRIMARY KEY NOT NULL,
	"numero_referencia" text NOT NULL,
	"cliente_nombre" text NOT NULL,
	"cliente_telefono" text,
	"fecha_hora" timestamp DEFAULT now(),
	"total" integer DEFAULT 0 NOT NULL,
	"estado" text DEFAULT 'pendiente',
	"observaciones" text,
	CONSTRAINT "pedidos_numero_referencia_unique" UNIQUE("numero_referencia")
);
--> statement-breakpoint
CREATE TABLE "reservas" (
	"id" serial PRIMARY KEY NOT NULL,
	"mesa_id" integer,
	"nombre" text NOT NULL,
	"email" text NOT NULL,
	"telefono" text,
	"fecha" date NOT NULL,
	"hora" text NOT NULL,
	"comensales" integer DEFAULT 2 NOT NULL,
	"observaciones" text,
	"estado" text DEFAULT 'pendiente',
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"role" text DEFAULT 'user',
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_category_id_menu_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."menu_categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pedido_items" ADD CONSTRAINT "pedido_items_pedido_id_pedidos_id_fk" FOREIGN KEY ("pedido_id") REFERENCES "public"."pedidos"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pedido_items" ADD CONSTRAINT "pedido_items_menu_item_id_menu_items_id_fk" FOREIGN KEY ("menu_item_id") REFERENCES "public"."menu_items"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_mesa_id_mesas_id_fk" FOREIGN KEY ("mesa_id") REFERENCES "public"."mesas"("id") ON DELETE no action ON UPDATE no action;