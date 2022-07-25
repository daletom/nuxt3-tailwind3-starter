import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/Tom/Documents/GitHub/nuxt3-tailwind3-starter/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}