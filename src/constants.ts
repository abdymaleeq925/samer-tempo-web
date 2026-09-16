import {
  Award,
  Cable,
  Disc,
  FolderTree,
  Globe,
  Grid,
  House,
  Info,
  LucideIcon,
  PhoneCall,
  ShieldCheck,
  Truck,
  Wrench,
} from 'lucide-react';

export type NavKey =
  | 'home'
  | 'catalogues'
  | 'categories'
  | 'about'
  | 'contacts';
export type CatKey = 'cables' | 'couplings' | 'tankCaps' | 'repairKits';
export type CatalogueId =
  | 'steelCables'
  | 'newProducts2026'
  | 'abs'
  | 'air'
  | 'cables'
  | 'fullCatalogue'
  | 'repairKits'
  | 'tankCaps';

export interface SubNavItem {
  readonly key: CatKey;
  readonly href: string;
  readonly image?: string;
  readonly icon?: LucideIcon;
}
export interface NavItem {
  readonly key: NavKey;
  readonly href?: string;
  readonly icon: LucideIcon;
  readonly children?: readonly SubNavItem[];
}
export interface CatalogItem {
  id: CatalogueId;
  fileSize: string;
  pdfUrl: string;
}
export interface SubCatMeta {
  readonly id: string;
  readonly categoryKey: CatKey;
}

interface CategoryShowcaseProps {
  readonly icon: LucideIcon;
  readonly imageSrc: string[];
  readonly href: string;
}

export const SUBCATEGORIES = [
  // cat-cables
  { id: 'subcat-spiral-cable', categoryKey: 'cables' },
  { id: 'subcat-abs-ebs-cable', categoryKey: 'cables' },
  { id: 'subcat-plugs-sockets', categoryKey: 'cables' },
  { id: 'subcat-abs-sensor', categoryKey: 'cables' },
  { id: 'subcat-rpm-sensor', categoryKey: 'cables' },
  { id: 'subcat-wear-sensor', categoryKey: 'cables' },
  { id: 'subcat-tir-cable', categoryKey: 'cables' },
  { id: 'subcat-reinforcement-cable', categoryKey: 'cables' },

  // cat-couplings
  { id: 'subcat-coupling', categoryKey: 'couplings' },
  { id: 'subcat-gladhand', categoryKey: 'couplings' },
  { id: 'subcat-coupling-accessories', categoryKey: 'couplings' },
  { id: 'subcat-valve', categoryKey: 'couplings' },
  { id: 'subcat-cylinder', categoryKey: 'couplings' },
  { id: 'subcat-air-hose', categoryKey: 'couplings' },
  { id: 'subcat-tire-inflator', categoryKey: 'couplings' },

  // cat-tankCaps
  { id: 'subcat-fuel-cap', categoryKey: 'tankCaps' },
  { id: 'subcat-radiator-cap', categoryKey: 'tankCaps' },
  { id: 'subcat-anti-theft', categoryKey: 'tankCaps' },
  { id: 'subcat-anti-theft-lock', categoryKey: 'tankCaps' },

  // cat-repairKits
  { id: 'subcat-camshaft-kit', categoryKey: 'repairKits' },
  { id: 'subcat-brake-shoe-kit', categoryKey: 'repairKits' },
  { id: 'subcat-hub-cap', categoryKey: 'repairKits' },
  { id: 'subcat-axle-lock-nut', categoryKey: 'repairKits' },
  { id: 'subcat-bush-bearing', categoryKey: 'repairKits' },
  { id: 'subcat-door-lock', categoryKey: 'repairKits' },
] as const satisfies readonly SubCatMeta[];

export type SubcategoryId = (typeof SUBCATEGORIES)[number]['id'];

export const NAV_LINKS = [
  { key: 'home', href: '', icon: House, children: undefined },
  { key: 'catalogues', href: '/catalogues', icon: Grid, children: undefined },
  {
    key: 'categories',
    href: undefined,
    icon: FolderTree,
    children: [
      {
        key: 'cables',
        href: '/categories/cables',
        image: '/products/s182-245pur.jpg',
        icon: Cable,
      },
      {
        key: 'couplings',
        href: '/categories/couplings',
        image: '/products/s010-01.jpg',
        icon: Disc,
      },
      {
        key: 'tankCaps',
        href: '/categories/tank-caps',
        image: '/products/s280-02.jpg',
        icon: ShieldCheck,
      },
      {
        key: 'repairKits',
        href: '/categories/repair-kits',
        image: '/products/tmp1852.jpg',
        icon: Wrench,
      },
    ],
  },
  { key: 'about', href: '/about', icon: Info, children: undefined },
  { key: 'contacts', href: '/contacts', icon: PhoneCall, children: undefined },
] as const satisfies readonly NavItem[];

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

export const SHOWCASE_CATEGORY_DATA: Partial<
  Record<CatKey, CategoryShowcaseProps>
> = {
  cables: {
    icon: Cable,
    imageSrc: [
      '/products/s182-245pur.jpg',
      '/products/r030-172.jpg',
      '/products/s186-115.jpg',
      '/products/r030-130.jpg',
    ],
    href: '/categories/cables',
  },
  couplings: {
    icon: Disc,
    imageSrc: [
      '/products/s010-01.jpg',
      '/products/s060-01.jpg',
      '/products/s130-01.jpg',
      '/products/s140.jpg',
    ],
    href: '/categories/couplings',
  },
  tankCaps: {
    icon: ShieldCheck,
    imageSrc: [
      '/products/s280-02.jpg',
      '/products/s280-10.jpg',
      '/products/s270.jpg',
      '/products/s277.jpg',
    ],
    href: '/categories/tank-caps',
  },
  repairKits: {
    icon: Wrench,
    imageSrc: [
      '/products/tmp1852.jpg',
      '/products/tmp5772.jpg',
      '/products/tmp9978.jpg',
    ],
    href: '/categories/repair-kits',
  },
} as const;

export const CATALOGUES_DATA: CatalogItem[] = [
  {
    id: 'steelCables',
    fileSize: '2.1 MB',
    pdfUrl: '/pdf/SMR-Steel-Cables.pdf',
  },
  {
    id: 'newProducts2026',
    fileSize: '920 KB',
    pdfUrl: '/pdf/SMR-NewProducts-2026.pdf',
  },
  {
    id: 'abs',
    fileSize: '5.5 MB',
    pdfUrl: '/pdf/SMR-ABS-2018.pdf',
  },
  {
    id: 'air',
    fileSize: '12.1 MB',
    pdfUrl: '/pdf/SMR-Air-2018.pdf',
  },
  {
    id: 'cables',
    fileSize: '3.2 MB',
    pdfUrl: '/pdf/SMR-Cable-2018.pdf',
  },
  {
    id: 'fullCatalogue',
    fileSize: '5.5 MB',
    pdfUrl: '/pdf/SMR-Catalogue.pdf',
  },
  {
    id: 'repairKits',
    fileSize: '7.5 MB',
    pdfUrl: '/pdf/SMR-RepairSet-2018.pdf',
  },
  {
    id: 'tankCaps',
    fileSize: '14.8 MB',
    pdfUrl: '/pdf/SMR-TankCap-2018.pdf',
  },
];

export const PLACEHOLDER_VIDEOS = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  'https://www.youtube.com/watch?v=9bZkp7q19f0',
  'https://vimeo.com/76979871',
] as const;

export const GRID_CELLS_COUNT = 8;
export const SWAP_INTERVAL_MS = 3000;
export const FEATURES_ICONS = [ShieldCheck, Award, Globe, Truck];
export const OPEN_DELAY = 60;
export const CLOSE_DELAY = 150;
export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.21862133833227!2d29.180518880710313!3d40.99247328745507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cace1cd4b6194b%3A0x6868e26aee2e8465!2sAcar%20Metal%20Kalip%20Sanayi%20Ve%20Ticaret%20Limited%20%C5%9Eirketi!5e0!3m2!1sen!2str!4v1785917352893!5m2!1sen!2str';
