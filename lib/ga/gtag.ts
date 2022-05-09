declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageView = (url: URL) => {
  window.gtag("config", process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID!, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
