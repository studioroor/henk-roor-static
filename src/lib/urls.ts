const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefixes a root-relative path (`/uploads/x.webp`, `/over-ons/`) with the site's base path. */
export function withBase(path: string): string {
  return path.startsWith('/') && !path.startsWith('//') ? base + path : path;
}

/** `06-41813767` → `tel:0641813767` */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}
