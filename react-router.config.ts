import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src", // tells the plugin to look under src/
  ssr: false,         // client-only SPA
} satisfies Config;
