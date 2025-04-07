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

export const filterList = [
  {
    title: 'Today',
    value: 'today',
  },
  {
    title: 'Last 7 days',
    value: 'last-7-days',
  },
  {
    title: 'This month',
    value: 'this-month',
  },
  {
    title: 'Last 3 months',
    value: 'last-3-months',
  },
];

export const transactionTypeList = [
  {
    label: 'Store Transactions',
    value: 'store',
  },
  {
    label: 'Get Tipped ',
    value: 'tipped',
  },
  {
    label: 'Withdrawals',
    value: 'withdrawals',
  },
  {
    label: 'Chargebacks',
    value: 'chargebacks',
  },
  {
    label: 'Cashbacks',
    value: 'cashbacks',
  },
  {
    label: 'Refer & Earn',
    value: 'refer',
  },
];

export const transactionStatusList = [
  {
    label: 'Successful',
    value: 'store',
  },
  {
    label: 'Pending ',
    value: 'pending',
  },
  {
    label: 'Failed',
    value: 'failed',
  },
];


export const profieLinks = [
  {
    name: 'Settings',
    src: '/svgs/link-bio.svg',
    href: '/',
  },
  {
    name: 'Purchase History',
    src: '/svgs/store.svg',
    href: '/',
  },
  {
    name: 'Refer and Earn',
    src: '/svgs/media-kit.svg',
    href: '/',
  },
  {
    name: 'Integrations',
    src: '/svgs/invoicing.svg',
    href: '/',
  },
  {
    name: 'Report Bug',
    src: '/svgs/store.svg',
    href: '/',
  },
];
