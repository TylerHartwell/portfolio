import { describe, expect, it } from "vitest"
import { toAbsoluteUrl } from "@/lib/site"

describe("toAbsoluteUrl", () => {
  it("returns an absolute URL for rooted paths", () => {
    expect(toAbsoluteUrl("/blog")).toBe("https://tylerhartwell.com/blog")
  })

  it("normalizes non-rooted paths", () => {
    expect(toAbsoluteUrl("projects")).toBe("https://tylerhartwell.com/projects")
  })
})
