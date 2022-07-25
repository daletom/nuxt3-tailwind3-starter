import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/Tom/Documents/GitHub/nuxt3-tailwind3-starter/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}