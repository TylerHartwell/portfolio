import { createClient } from "next-sanity"

export function getSanityConfig(env: NodeJS.ProcessEnv = process.env) {
  const useCdnFromEnv = env.SANITY_USE_CDN

  return {
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "uv1fpmpl",
    dataset: env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
    apiVersion: env.SANITY_API_VERSION ?? "2024-01-01",
    useCdn: typeof useCdnFromEnv === "string" ? useCdnFromEnv === "true" : env.NODE_ENV === "production"
  }
}

export const client = createClient(getSanityConfig())
