import React from "react";

export default function ReturnRefund() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-[#033e2d] font-sans">
      <h1 className="text-3xl font-semibold mb-6 text-[#c19a6b]">
        Return and Refund Policy
      </h1>

      <p className="mb-4">
        At <strong>Aahasuvai Spices</strong>, we are committed to delivering high-quality spices and masalas
        to our customers with the utmost care and attention. Every order undergoes a thorough quality check
        before dispatch to ensure it reaches you in perfect condition.
      </p>

      <p className="mb-6">
        However, if any product does not meet the description or standards specified on our website, we are
        happy to offer a replacement or refund, depending on the situation.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#c19a6b]">Return Policy</h2>
      <p className="mb-2">
        Products once sold will not be accepted for return unless:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>There is a manufacturing defect, or</li>
        <li>The wrong product has been shipped from our side.</li>
      </ul>

      <p className="mb-4">
        To initiate a return or replacement, please email us at{" "}
        <a href="mailto:aahasuvaispices@gmail.com" className="text-[#c19a6b] underline">
          aahasuvaispices@gmail.com
        </a>{" "}
        within <strong>2 days</strong> of receiving your product. Include your order number and a brief
        reason for the return.
      </p>

      <p className="mb-2">Please note, we do not accept returns in the following cases:</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Damage caused due to misuse or mishandling of the product</li>
        <li>Return requests made after 2 days from the date of delivery</li>
        <li>Partial returns of order items</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-[#c19a6b]">Refund Policy</h2>
      <p className="mb-4">
        If you are eligible for a refund, please contact us within <strong>2 days</strong> of delivery with
        your order number and reason for refund. This helps us improve our quality and service.
      </p>

      <p className="mb-4">
        Once we receive the returned product at our warehouse and it passes our inspection, your refund will
        be processed. This may take up to <strong>15 working days</strong>.
      </p>

      <p className="mb-4">
        Refunds will be issued to your original method of payment or as store credit, depending on the
        situation.
      </p>
    </div>
  );
}
