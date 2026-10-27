import Link from 'next/link';

type Props = {
  lang: string;
  homeLabel: string;
  categoryLabel?: string;
  categoryHref?: string;
  productTitle: string;
};

export function ProductBreadcrumbs({
  lang,
  homeLabel,
  categoryLabel,
  categoryHref,
  productTitle,
}: Props) {
  const item = 'font-heading font-medium text-lg md:text-2xl';
  return (
    <div className="p-4 lg:px-8 xl:px-18 border-b border-border-strong">
      <nav aria-label="breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
          <li className={item}>
            <Link href={`/${lang}`} className="hover:text-foreground">
              {homeLabel}
            </Link>
          </li>
          {categoryLabel && categoryHref && (
            <>
              <li aria-hidden="true">›</li>
              <li className={item}>
                <Link href={categoryHref} className="hover:text-foreground">
                  {categoryLabel}
                </Link>
              </li>
            </>
          )}
          <li aria-hidden="true">›</li>
          <li className={item}>
            <span aria-current="page" className="text-foreground">
              {productTitle}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
