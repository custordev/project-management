import { getCategoryById } from "@/actions/categories";
import ClientForm from "@/components/Forms/ClientForm";
import React from "react";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const category = await getCategoryById(id);
  return (
    <div className="p-8">
      <ClientForm  />
    </div>
  );
}
