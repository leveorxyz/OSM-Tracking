import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: "VITE_ENV_",
  server: {},
  client: {
    VITE_ENV_API_KEY: z.string().min(1),
    VITE_ENV_AUTH_DOMAIN: z.string().min(1),
    VITE_ENV_DATABASE_URL: z.string().min(1),
    VITE_ENV_PROJECT_ID: z.string().min(1),
    VITE_ENV_STORAGE_BUCKET: z.string().min(1),
    VITE_ENV_MESSAGING_SENDER_ID: z.string().min(1),
    VITE_ENV_APP_ID: z.string().min(1),
    VITE_ENV_MEASUREMENT_ID: z.string().min(1),
  },
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnv: import.meta.env,
});
