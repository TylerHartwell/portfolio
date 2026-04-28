import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"

export default [
  {
    ignores: ["eslint.config.mjs", "next.config.mjs", "postcss.config.mjs"]
  },
  ...nextCoreWebVitals,
  ...nextTypeScript
]
