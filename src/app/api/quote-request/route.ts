import { NextResponse } from "next/server";
import { businessDetails } from "@/lib/site-data";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  serviceNeeded?: string;
  message?: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = (await request.json()) as QuotePayload;

  const payload = {
    name: normalize(body.name),
    phone: normalize(body.phone),
    email: normalize(body.email),
    serviceNeeded: normalize(body.serviceNeeded),
    message: normalize(body.message),
  };

  const missingField = Object.entries(payload).find(([, value]) => !value);

  if (missingField) {
    return NextResponse.json(
      { error: `Missing required field: ${missingField[0]}` },
      { status: 400 },
    );
  }

  // Placeholder implementation: logs requests server-side until email/CRM is connected.
  console.info("Frady's quote request received", payload);

  return NextResponse.json({
    ok: true,
    message: `Quote request sent to ${businessDetails.email}.`,
  });
}
