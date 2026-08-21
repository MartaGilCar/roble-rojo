import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#E8E0D4] bg-[#FAF7F2] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-[#2B2927]/70 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-medium text-[#2B2927]">Roble Rojo</p>
          <p className="mt-1">Fotografía editorial, íntima y serena.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="https://www.instagram.com/roble__rojo?igsh=NzRiNDk0ZzQ0enJ4&utm_source=qr" className="transition hover:text-[#2B2927]">
            Instagram
          </Link>
          {/* <a href="mailto:margicar@outlook.es" className="transition hover:text-[#2B2927]">
            margicar@outlook.es
          </a> */}
          <span>© 2026 Roble Rojo</span>
        </div>
      </div>
    </footer>
  );
}
