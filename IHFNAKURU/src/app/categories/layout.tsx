import React from "react";
import { Layout as BaseLayout } from "@components/layout";
import authOptions from "@app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Layout({ children }: React.PropsWithChildren) {
  const data = await getData();

  if (!data.session?.user) {
    return redirect("/login");
  }

  return <BaseLayout>{children}</BaseLayout>;
}

async function getData() {
  const session = await getServerSession(authOptions);
  return {
    session,
  };
}
