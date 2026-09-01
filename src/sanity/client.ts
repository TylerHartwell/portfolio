import { createClient } from "next-sanity"

export function getSanityConfig(env: NodeJS.ProcessEnv = process.env) {
  const requiredVariables = [
    "NEXT_PUBLIC_SANITY_PROJECT_ID",
    "NEXT_PUBLIC_SANITY_DATASET",
    "SANITY_API_VERSION",
    "SANITY_USE_CDN"
  ] as const

  const missingVariables = requiredVariables.filter((name) => !env[name])

  if (missingVariables.length > 0) {
    throw new Error(`Missing required Sanity environment variables: ${missingVariables.join(", ")}`)
  }

  return {
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: env.SANITY_API_VERSION,
    useCdn: env.SANITY_USE_CDN === "true"
  }
}

export const client = createClient(getSanityConfig())
