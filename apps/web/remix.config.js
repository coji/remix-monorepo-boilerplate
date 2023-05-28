/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  devServerPort: 8000,
  serverModuleFormat: "cjs",
  watchPaths: ["../../packages/database", "../../packages/ui"],
};
