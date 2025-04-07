import { AnalyticsSVG, CrmSVG, HomeSVG, RevenueSVG } from "@/public/svgs";

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

export const sidebarLinks = [
  {
    name: 'Link in Bio',
    src: '/svgs/link-bio.svg',
    href: '/',
    description: 'Manage your Link in Bio'
  },
  {
    name: 'Store',
    src: '/svgs/store.svg',
    href: '/',
    description: 'Manage your Store activities'
  },
  {
    name: 'Media Kit',
    src: '/svgs/media-kit.svg',
    href: '/',
    description: 'Manage your Media Kit'
  },
  {
    name: 'Invoicing',
    src: '/svgs/invoicing.svg',
    href: '/',
    description: 'Manage your Invoices'
  },
  {
    name: 'Bookings',
    src: '/svgs/store.svg',
    href: '/',
    description: 'Manage your Bookings'
  },
];