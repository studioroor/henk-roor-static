// Rehype plugin for content written in the CMS.
// - Root-relative links and images (`/uploads/photo.webp`) get the site's base path, so content
//   doesn't need to know the site is served from a sub folder on GitHub Pages.
// - An image hint after `#` (`photo.webp#right`, chosen in the CMS) becomes a class `align-right`.
export default function rehypeSiteUrls({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  const withBase = (url) =>
    typeof url === 'string' && url.startsWith('/') && !url.startsWith('//') && !url.startsWith(`${prefix}/`)
      ? prefix + url
      : url;

  const visit = (node) => {
    if (node.type === 'element') {
      if (node.tagName === 'img' && typeof node.properties.src === 'string') {
        const [src, hint] = node.properties.src.split('#');
        node.properties.src = withBase(src);
        if (hint) node.properties.className = [...(node.properties.className ?? []), `align-${hint}`];
      }
      if (node.tagName === 'a') node.properties.href = withBase(node.properties.href);
    }
    node.children?.forEach(visit);
  };
  return visit;
}
