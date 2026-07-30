import { House, Grid, FolderTree, Info, PhoneCall, ShieldCheck, Award, Globe, Truck, type LucideIcon } from "lucide-react";

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

type SubKey = 'cables' | 'couplings' | 'tankCaps' | 'repairKits' | 'company' | 'vision' | 'mission' | 'certificates';

interface SubNavItem {
  key: SubKey,
  href: string
}
interface NavItem {
  key: 'home' | 'catalog' | 'categories' | 'about' | 'contacts',
  href: string,
  icon: LucideIcon,
  children?: SubNavItem[]
}

export const NAV_LINKS: NavItem[] = [
  { key: 'home', href: '', icon: House },
  { key: 'catalog', href: '/catalog', icon: Grid },
  { key: 'categories', href: '/categories', icon: FolderTree,
    children: [
      { key: 'cables', href: '/categories/cables' },
      { key: 'couplings', href: '/categories/couplings' },
      { key: 'tankCaps', href: '/categories/tank-caps' },
      { key: 'repairKits', href: '/categories/repair-kits' }
    ] 
  },
  { key: 'about', href: '/about', icon: Info,
    children: [
      { key: 'company', href: '/about/company' },
      { key: 'vision', href: '/about/vision' },
      { key: 'mission', href: '/about/mission' },
      { key: 'certificates', href: '/about/certificates' }
    ]
  },
  { key: 'contacts', href: '/contacts', icon: PhoneCall },
] as const;

export const GRID_CELLS_COUNT = 8;

export const SWAP_INTERVAL_MS = 3000;

export const FEATURES_ICONS = [ShieldCheck, Award, Globe, Truck];
