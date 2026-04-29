import { describe, expect, it } from "vitest"
import { getSanityConfig } from "@/sanity/client"

describe("getSanityConfig", () => {
  it("uses environment overrides when provided", () => {
    const config = getSanityConfig({
      NEXT_PUBLIC_SANITY_PROJECT_ID: "project-from-env",
      NEXT_PUBLIC_SANITY_DATASET: "staging",
      SANITY_API_VERSION: "2026-04-29",
      SANITY_USE_CDN: "false",
      NODE_ENV: "production"
    })

    expect(config).toMatchObject({
      projectId: "project-from-env",
      dataset: "staging",
      apiVersion: "2026-04-29",
      useCdn: false
    })
  })

  it("falls back to production CDN behavior when no explicit flag is passed", () => {
    const config = getSanityConfig({ NODE_ENV: "production" })
    expect(config.useCdn).toBe(true)
  })
})
