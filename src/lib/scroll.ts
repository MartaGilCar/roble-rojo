export function scrollToIdWithOffset(id: string, offset?: number) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  let finalOffset = 0;
  if (typeof offset === "number") {
    finalOffset = offset;
  } else {
    const header = document.querySelector("header");
    const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
    finalOffset = headerHeight + 80; // increased breathing room
  }

  const rect = el.getBoundingClientRect();
  const elTop = rect.top + window.scrollY;
  const elHeight = rect.height;
  const viewportHeight = window.innerHeight;
  const available = Math.max(0, viewportHeight - finalOffset);

  let targetY: number;
  if (elHeight <= available) {
    // If the element fits, center it in the available space under the header
    const extra = Math.floor((available - elHeight) / 2);
    targetY = elTop - finalOffset - extra;
  } else {
    // If it doesn't fit, align top just under the header
    targetY = elTop - finalOffset;
  }

  window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
}

export default scrollToIdWithOffset;
