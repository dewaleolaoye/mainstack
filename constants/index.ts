import { AnalyticsSVG, AppSVG, CrmSVG, HomeSVG, RevenueSVG } from "@/public/svgs";

export const navbarLinks = [
  {
    title: 'Home',
    href: '/',
    src: HomeSVG
  },
  {
    title: 'Analytics',
    href: '/analytics',
    src: AnalyticsSVG
  },
  {
    title: 'Revenue',
    href: '/revenue',
    src: RevenueSVG
  },
  {
    title: 'CRM',
    href: '/crm',
    src: CrmSVG
  },
  {
    title: 'Apps',
    href: '/#',
    src: AppSVG
  },
];

export const configs = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
};

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 150,
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
      hoverRadius: 6,
    },
  }
};