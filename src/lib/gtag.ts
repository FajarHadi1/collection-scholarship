export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const trackEvent = (action: string, params: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
};
