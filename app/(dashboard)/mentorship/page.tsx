"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MentorshipRootPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/mentorship/overview");
  }, [router]);

  return null;
}
