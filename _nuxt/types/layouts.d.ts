import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/Kevin/OneDrive/Documents/repo/personal/kevinmoemyintmyat.github.io/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}