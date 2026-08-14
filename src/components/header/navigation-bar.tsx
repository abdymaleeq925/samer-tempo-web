'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { useOutsideClick } from '@/hooks/use-outside-click';
import { useEscapeKey } from '@/hooks/use-escape-key';
import type { NavItem, SubKey } from '@/constants';
import NavDropdownPanel from './dropdown';

interface NavBarProps {
  link: NavItem;
  lang: string;
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  getSubLabel: (key: SubKey) => string;
}

export default function Navbar({ link, lang, label, isOpen, onOpen, onClose, onToggle, getSubLabel }: NavBarProps) {
  const itemRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const Icon = link.icon;
  const hasChildren = Boolean(link.children?.length);
  const panelId = `nav-panel-${link.key}`;
  const triggerId = `nav-trigger-${link.key}`;

  useOutsideClick(itemRef, onClose, isOpen);
  useEscapeKey(() => {
    onClose();
    triggerRef.current?.focus();
  }, isOpen);

  return (
    <li
      ref={itemRef}
      className="relative"
      onMouseEnter={hasChildren ? onOpen : undefined}
      onMouseLeave={hasChildren ? onClose : undefined}
      onBlur={(e) => { if (hasChildren && !e.currentTarget.contains(e.relatedTarget as Node)) onClose() }}
    >
      {hasChildren ? (
        <>
          <button
            ref={triggerRef}
            id={triggerId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={onToggle}
            onFocus={onOpen}
            className="group flex flex-col items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-colors h-12 shrink-0"
          >
            <div className="flex items-center justify-center gap-1 h-6">
              <Icon className="w-6 h-6 group-hover:text-brand transition-colors shrink-0" />
              <ChevronDown className={`w-4.5 h-4.5 transition-transform duration-200 shrink-0 group-hover:text-brand ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <span className="group-hover:text-brand transition-colors leading-none text-sm lg:text-base font-medium font-heading">
              {label}
            </span>
          </button>
          <AnimatePresence>
            {isOpen && (
              <NavDropdownPanel
                panelId={panelId}
                triggerId={triggerId}
                lang={lang}
                fallbackIcon={Icon}
                items={link.children!}
                getLabel={getSubLabel}
                onClose={onClose}
              />
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={`/${lang}${link.href}`}
          className="group flex flex-col items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-colors h-12 shrink-0"
        >
          <Icon className="w-6 h-6 group-hover:text-brand transition-colors shrink-0"/> 
          <span className="group-hover:text-brand transition-colors leading-none text-sm lg:text-base font-medium font-heading">
            {label}
          </span>
        </Link>
      )}
    </li>
  );
}