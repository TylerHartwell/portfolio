const DEFAULT_SITE_URL = "https://tylerhartwell.com"

export const site = {
  name: "Tyler Hartwell",
  title: "Tyler Hartwell | Fullstack Software Developer",
  description: "Portfolio and developer blog for Tyler Hartwell, showcasing projects, technical writeups, and engineering work.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL
}

export function toAbsoluteUrl(pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`
  return new URL(normalizedPath, site.url).toString()
}
