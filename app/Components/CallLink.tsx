// components/CalLink.jsx
"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

interface CalLinkProps {
  children: React.ReactNode;
  className?: string;
  calLink?: string;
  namespace?: string;
}

export default function CalLink({
  children,
  className = "",
  calLink = "nishanthan-krishnarajah-s6anw2/30min",
  namespace = "30min",
}: CalLinkProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view" as const,
      });
    })();
  }, [namespace]);

  return (
    <button
      data-cal-namespace={namespace}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
      onClick={(e) => e.preventDefault()} // Prevent default behavior
    >
      {children}
    </button>
  );
}
