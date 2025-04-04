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