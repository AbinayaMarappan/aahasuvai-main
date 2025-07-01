import React from "react";

export default function ShippingPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-[#033e2d] font-sans">
      <h1 className="text-3xl font-semibold mb-6 text-[#c19a6b]">
        Shipping Policy
      </h1>

      <p className="mb-4">
        At Aahasuvai Spices, we work hard to ensure that your order reaches you as quickly and safely as possible.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>All confirmed orders are usually dispatched within 2–3 working days of placing the order.</li>
        <li>Once your order is dispatched, you will receive a tracking link via SMS or email for real-time updates on your shipment.</li>
        <li>In rare cases of high order volume or stock delays, there may be a slight delay in dispatch. We will keep you informed and strive to dispatch your order as soon as possible.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-[#c19a6b]">Delivery Policy</h2>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Orders are typically delivered within 14 working days from the date of dispatch, or as per the estimated delivery date provided during the order confirmation.</li>
        <li>All deliveries will be made to the shipping address provided by you during checkout or registration.</li>
        <li>Delivery updates and status will be sent to your registered email ID.</li>
      </ul>

      <p>
        We rely on trusted courier and logistics partners to ensure timely and secure delivery of your products.
      </p>
    </div>
  );
}
