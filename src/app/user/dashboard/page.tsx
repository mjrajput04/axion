import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";
import { DashboardContent } from "@/components/DashboardContent";

export default async function UserDashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <DashboardContent user={session.user} />
  );
}
