const CANONICAL_ORIGIN = "https://www.myspaces.app";
const LEGACY_PAGES_SUFFIX = ".myspaces-website.pages.dev";

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const { hostname, pathname, search } = url;

  if (
    hostname === "myspaces-website.pages.dev" ||
    hostname.endsWith(LEGACY_PAGES_SUFFIX)
  ) {
    return Response.redirect(`${CANONICAL_ORIGIN}${pathname}${search}`, 301);
  }

  return context.next();
}
