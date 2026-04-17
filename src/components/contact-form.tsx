"use client";

import { FormEvent, useState } from "react";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialState: FormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "submitting", message: "Sending your request..." });

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          serviceNeeded: formData.get("serviceNeeded"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to send request");
      }

      setState({
        status: "success",
        message:
          "Thank you. Your request has been sent to Frady's Flooring Service. We will contact you soon.",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      setState({
        status: "error",
        message:
          "We could not send your request right now. Please call one of the listed numbers for immediate help.",
      });
    }
  }

  return (
    <form
      className="rounded-2xl border border-[#d9c8a8] bg-white p-6 shadow-sm md:p-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-[#0f2b46]">Request a Free Quote</h2>
      <p className="mt-2 text-sm text-[#2f3c48]">
        Fill out this form and Frady&apos;s Flooring Service will follow up with
        you.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-[#0f2b46]">
          Name
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-md border border-[#d4c7ae] px-3 py-2 text-sm font-normal text-[#1f2a33] focus:border-[#c89c4a] focus:outline-none focus:ring-1 focus:ring-[#c89c4a]"
          />
        </label>

        <label className="space-y-1 text-sm font-semibold text-[#0f2b46]">
          Phone
          <input
            required
            name="phone"
            type="tel"
            className="w-full rounded-md border border-[#d4c7ae] px-3 py-2 text-sm font-normal text-[#1f2a33] focus:border-[#c89c4a] focus:outline-none focus:ring-1 focus:ring-[#c89c4a]"
          />
        </label>

        <label className="space-y-1 text-sm font-semibold text-[#0f2b46]">
          Email
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-md border border-[#d4c7ae] px-3 py-2 text-sm font-normal text-[#1f2a33] focus:border-[#c89c4a] focus:outline-none focus:ring-1 focus:ring-[#c89c4a]"
          />
        </label>

        <label className="space-y-1 text-sm font-semibold text-[#0f2b46]">
          Service Needed
          <select
            required
            name="serviceNeeded"
            className="w-full rounded-md border border-[#d4c7ae] bg-white px-3 py-2 text-sm font-normal text-[#1f2a33] focus:border-[#c89c4a] focus:outline-none focus:ring-1 focus:ring-[#c89c4a]"
          >
            <option value="">Select a service</option>
            <option value="Hardwood Floor Installation">
              Hardwood Floor Installation
            </option>
            <option value="LVP Installation">LVP Installation</option>
            <option value="Laminate Installation">Laminate Installation</option>
            <option value="Floor Removal & Tear-Out">
              Floor Removal & Tear-Out
            </option>
            <option value="Sanding & Refinishing">Sanding & Refinishing</option>
            <option value="Subfloor Prep">Subfloor Prep</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block space-y-1 text-sm font-semibold text-[#0f2b46]">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-md border border-[#d4c7ae] px-3 py-2 text-sm font-normal text-[#1f2a33] focus:border-[#c89c4a] focus:outline-none focus:ring-1 focus:ring-[#c89c4a]"
        />
      </label>

      <button
        type="submit"
        disabled={state.status === "submitting"}
        className="mt-5 inline-flex items-center justify-center rounded-md bg-[#0f2b46] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#163a5e] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.status === "submitting" ? "Sending..." : "Get a Free Quote"}
      </button>

      {state.message ? (
        <p
          className={`mt-4 text-sm ${
            state.status === "success" ? "text-emerald-700" : "text-[#6c2515]"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
