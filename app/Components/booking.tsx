"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";

export default function CalButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view" as const, // Add 'as const' for type assertion
      });
    })();
  }, []);

  return (
    <Button
      data-cal-namespace="30min"
      data-cal-link="nishanthan-krishnarajah-s6anw2/30min"
      data-cal-config='{"layout":"month_view"}'
      size="sm"
    >
      Book Call
    </Button>
  );
}
