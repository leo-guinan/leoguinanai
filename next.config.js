// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import("@blitzjs/next").BlitzConfig}
 **/
// Before defining your Security Headers
// add Content Security Policy directives using a template string.

const config = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; frame-src app.copy.ai; style-src 'unsafe-inline'",
          },
        ],
      },
    ]
  },
}

module.exports = withBlitz(config)
