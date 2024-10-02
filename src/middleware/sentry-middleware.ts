// eslint-disable-next-line import/no-extraneous-dependencies
import { wrapRequestHandler } from "@sentry/cloudflare";
import { defineMiddleware } from "astro/middleware";

export const sentryMiddleware = defineMiddleware(async (context, next) => {
  console.log(
    "sentryMiddleware",
    (context.locals as any).runtime.ctx,
    import.meta.env.ASTRO_SERVER_SENTRY_DSN
  );
  return wrapRequestHandler(
    {
      options: {
        dsn: import.meta.env.ASTRO_SERVER_SENTRY_DSN,
        environment: import.meta.env.MODE,
      },
      request: context.request,
      context: (context.locals as any).runtime.ctx,
    },
    () => next()
  );
});
