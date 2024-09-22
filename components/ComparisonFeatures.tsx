import React from "react";
import SectionHeading from "./global/SectionHeading";
import FeaturesCard from "./FeaturesCard";

export default function ComparisonFeatures() {
  const cons = [
    "Manually create invoices",
    "Or pay up to $2 per invoice",
    "Waste hours in customer support",
    "Can’t update details once sent (VAT, Tax ID)",
    "Can't make invoices for previous purchases",
  ];
  const pros = [
    "Self-serve invoices",
    "One-time payment for unlimited invoices",
    "No more customer support",
    "Editable invoices to stay compliant",
    "Invoices for any payment, even past ones",
  ];
  return (
    <div className="text-center ">
      <div className="pb-6">
        <SectionHeading title="Tired of managing Stripe invoices?" />
      </div>
      <div className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FeaturesCard
          features={cons}
          title="Stripe invoices without ZenVoice"
          className="bg-red-50 text-red-800"
        />
        <FeaturesCard
          features={pros}
          title="Stripe invoices + ZenVoice"
          className="bg-green-50 text-green-800"
        />
      </div>
    </div>
  );
}
