import { describe, expect, it, vi } from "vitest"

vi.hoisted(() => {
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "test-project"
  process.env.NEXT_PUBLIC_SANITY_DATASET = "test-dataset"
  process.env.SANITY_API_VERSION = "2024-01-01"
  process.env.SANITY_USE_CDN = "false"
})

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

  it("throws when required configuration is missing", () => {
    expect(() => getSanityConfig({ NODE_ENV: "production" })).toThrow("Missing required Sanity environment variables")
  })
})
