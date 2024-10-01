import { sequence } from "astro/middleware";

import { sentryMiddleware } from "./sentry-middleware";

export const onRequest = sequence(sentryMiddleware);
