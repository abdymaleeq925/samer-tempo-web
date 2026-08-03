import { House, Grid, FolderTree, Info, PhoneCall, ShieldCheck, Award, Globe, Truck, Cable, Disc, Wrench, LucideIcon, Building2, Eye, Target } from "lucide-react";

export const PRODUCT_IMAGES = [
  '/products/r010-02.jpg',
  '/products/r010-04.jpg',
  '/products/r020-01a.jpg',
  '/products/r030-101.jpg',
  '/products/r030-130.jpg',
  '/products/r030-172.jpg',
  '/products/s010-01.jpg',
  '/products/s010-02.jpg',
  '/products/s060-01.jpg',
  '/products/s130-01.jpg',
  '/products/s130-02.jpg',
  '/products/s140.jpg',
  '/products/s182-245pur.jpg',
  '/products/s185-111pur.jpg',
  '/products/s186-115.jpg',
  '/products/s270.jpg',
  '/products/s277.jpg',
  '/products/s280-02.jpg',
  '/products/s280-10.jpg',
  '/products/s280-11.jpg',
  '/products/s280-15z.jpg',
  '/products/s280-17.jpg',
  '/products/s280-18.jpg',
  '/products/tmp1852.jpg',
  '/products/tmp5772.jpg',
  '/products/tmp9978.jpg',
] as const;

export type NavKey = 'home' | 'catalog' | 'categories' | 'about' | 'contacts';
export type SubKey = 'cables' | 'couplings' | 'tankCaps' | 'repairKits' | 'company' | 'vision' | 'mission' | 'certificates';
export interface SubNavItem {
  readonly key: SubKey,
  readonly href: string,
  readonly image?: string,
  readonly icon?: LucideIcon;
}
export interface NavItem {
  readonly key: NavKey,
  readonly href?: string,
  readonly icon: LucideIcon,
  readonly children?: readonly SubNavItem[]
}

export const NAV_LINKS = [
  { key: 'home', href: '', icon: House, children: undefined },
  { key: 'catalog', href: '/catalog', icon: Grid, children: undefined },
  {
    key: 'categories', href: undefined, icon: FolderTree,
    children: [
      { key: 'cables', href: '/categories/cables', image: "/products/s182-245pur.jpg", icon: Cable },
      { key: 'couplings', href: '/categories/couplings', image: "/products/s010-01.jpg", icon: Disc },
      { key: 'tankCaps', href: '/categories/tank-caps', image: "/products/s280-02.jpg", icon: ShieldCheck },
      { key: 'repairKits', href: '/categories/repair-kits', image: "/products/tmp1852.jpg", icon: Wrench },
    ],
  },
  {
    key: 'about', href: undefined, icon: Info,
    children: [
      { key: 'company', href: '/about/company', image: undefined, icon: Building2 },
      { key: 'vision', href: '/about/vision', image: undefined, icon: Eye },
      { key: 'mission', href: '/about/mission', image: undefined, icon: Target },
      { key: 'certificates', href: '/about/certificates', image: undefined, icon: Award },
    ],
  },
  { key: 'contacts', href: '/contacts', icon: PhoneCall, children: undefined },
] as const satisfies readonly NavItem[];

export const GRID_CELLS_COUNT = 8;

export const SWAP_INTERVAL_MS = 3000;

export const FEATURES_ICONS = [ShieldCheck, Award, Globe, Truck];

export const OPEN_DELAY = 60;
export const CLOSE_DELAY = 150;

interface CategoryShowcaseProps {
  readonly icon: LucideIcon;
  readonly imageSrc: string[];
  readonly href: string;
}

export const CATEGORY_META: Record<string, CategoryShowcaseProps> = {
  cables: {
    icon: Cable,
    imageSrc: ['/products/s182-245pur.jpg', '/products/r030-172.jpg', '/products/s186-115.jpg', '/products/r030-130.jpg'],
    href: '/catalog/cables',
  },
  couplings: {
    icon: Disc,
    imageSrc: ['/products/s010-01.jpg', '/products/s060-01.jpg', '/products/s130-01.jpg', '/products/s140.jpg'],
    href: '/catalog/couplings',
  },
  tankCaps: {
    icon: ShieldCheck,
    imageSrc: ['/products/s280-02.jpg', '/products/s280-10.jpg', '/products/s270.jpg', '/products/s277.jpg'],
    href: '/catalog/tank-caps',
  },
  repairKits: {
    icon: Wrench,
    imageSrc: ['/products/tmp1852.jpg', '/products/tmp5772.jpg', '/products/tmp9978.jpg'],
    href: '/catalog/repair-kits',
  },
} as const;
