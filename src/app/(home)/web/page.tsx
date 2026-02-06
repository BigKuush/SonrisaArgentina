import { redirect } from "next/navigation";

// Redirect /web to / for SEO (avoid duplicate content)
export default function WebPage() {
  redirect("/");
}
