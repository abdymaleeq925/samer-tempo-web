"use client"

import { Button } from "@/components/ui/button";
import { CATALOGUES_DATA } from "@/constants";
import { useLang } from "@/context/lang-context"
import { Download, ExternalLink, FileText, UserCheck } from "lucide-react";
import Link from "next/link";

export function Catalog() {
  const { dict, lang } = useLang();
  const n = dict.catalogues;
  return (
    <section className="py-12 bg-stone-100 min-h-[70vh] font-heading">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {n.title}
          </h1>
          <p className="text-base md:text-lg">
            {n.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CATALOGUES_DATA.map((item) => {
            const catalogTitle = dict.catalogues?.[item.id] ?? item.id;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-ink bg-white px-4 py-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg border border-ink">
                      <FileText className="w-6 h-6"/>
                    </div>
                    <span className="text-xs font-caption px-2.5 py-1 rounded-md border border-ink">
                      PDF • {item.fileSize}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">
                    {catalogTitle}
                  </h3>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-ink">
                  <Button
                    nativeButton={false}
                    variant="outline"
                    className="flex-1 border-ink bg-transparent hover:bg-ink hover:text-white font-caption"
                    render={
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {n.viewBtn}
                      </a>
                    }
                  />
                  <Button
                    nativeButton={false}
                    className="flex-1 bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper font-caption font-medium"
                    render={
                      <a
                        href={item.pdfUrl}
                        download
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        {n.downloadBtn}
                      </a>
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="rounded-2xl border border-ink bg-transparent p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Samer Tempo
            </h3>
            <p className="text-lg">
              {n.subtitle}
            </p>
          </div>
          <Button
            size="lg"
            nativeButton={false}
            className="bg-transparent border-2 border-ink text-ink transition-colors hover:bg-brand hover:border-0 px-6 shrink-0"
            render={
              <Link href={`/${lang}/contacts`} className="inline-flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                {n.contactBtn}
              </Link>
            }
          />
        </div>

      </div>
    </section>
  )
}