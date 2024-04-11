declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  import Vue from "vue";
  const component: DefineComponent<{}, {}, any> | Vue;
  export default component;
}

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
