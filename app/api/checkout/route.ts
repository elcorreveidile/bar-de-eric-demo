import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { productos } from "@/lib/productos-tienda";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { items } = body as { items: { id: string; cantidad: number }[] };

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "No hay productos" }, { status: 400 });
  }

  const lineItems = items.map((item) => {
    const producto = productos.find((p) => p.id === item.id);
    if (!producto) {
      throw new Error(`Producto no encontrado: ${item.id}`);
    }
    return {
      price_data: {
        currency: "eur",
        product_data: {
          name: producto.nombre,
          description: producto.descripcion,
          images: [`${process.env.NEXT_PUBLIC_BASE_URL || "https://bar-de-eric-demo.vercel.app"}${producto.imagen}`],
        },
        unit_amount: producto.precio,
      },
      quantity: item.cantidad,
    };
  });

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    shipping_address_collection: {
      allowed_countries: ["ES"],
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://bar-de-eric-demo.vercel.app"}/tienda/confirmacion?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://bar-de-eric-demo.vercel.app"}/tienda`,
  });

  return NextResponse.json({ url: session.url });
}
