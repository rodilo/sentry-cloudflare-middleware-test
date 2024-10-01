import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import preact from "@astrojs/preact";

export default defineConfig({
  integrations: [preact({ compat: true })],
  adapter: cloudflare({
  }),
  output: "server",
  vite: {
    define: {
      "process.env.ASTRO_SERVER_SENTRY_DSN": JSON.stringify(
        process.env.ASTRO_SERVER_SENTRY_DSN
      ),
    },
    ssr:{
      external: [
				'async_hooks',
				'diagnostics_channel',
				'events',
				'module',
				'node:async_hooks',
				'node:child_process',
				'node:fs',
				'node:http',
				'node:https',
				'node:inspector',
				'node:net',
				'node:os',
				'node:path',
				'node:readline',
				'node:stream',
				'node:tls',
				'node:util',
				'node:worker_threads',
				'node:zlib',
				'path',
				'url',
				'util',
				'worker_threads',
				'diagnostics_channel',
			],
    }
  },
});
