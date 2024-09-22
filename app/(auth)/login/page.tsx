import LoginForm from "@/components/Forms/LoginForm";
import { authOptions } from "@/config/auth";
import { Lock, Mail } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <section>
      <div className="md:container px-4 md:px-0">
        <div className="border-gray-200 dark:border-gray-700 max-w-md mx-auto border my-3 shadow rounded-md ">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
