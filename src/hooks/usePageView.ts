import { useRouter } from "next/router";
import { useEffect } from "react";

import { isExistGaId, pageView } from "../lib/gtag";

export const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isExistGaId) return;

    const handleRouteChange = (path: string, { shallow }: any) => {
      if (!shallow) pageView(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
