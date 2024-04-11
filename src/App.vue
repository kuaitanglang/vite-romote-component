<template>
  dev:
  <component :is="dev"></component>

  build-esm:
  <component :is="esm" ></component>

  build-umd:
  <component :is="umd" ></component>

  <div class="env-switch">
    <button :class="name=='dev' ? name : ''" @click="changeView('dev')">DEV</button>
    <button :class="name=='build' ? name : ''" @click="changeView('build')">BUILD</button>
  </div>
</template>


<script setup lang="ts">
import { h, ref, toRefs, markRaw, onMounted, defineAsyncComponent, resolveComponent } from 'vue'
// 本地测试
import dev from '/rollup/components/button/index.vue'

// 远程调用测试
import esm from '/rollup/dist/button/button.esm.js'
let buildUrl = ref('http://127.0.0.1:3000/button/button.umd.js');
let umd = ref("")

let viewDemo = ref({
  dev,
  umd
})

let name = ref('dev')

onMounted(async ()=>{
  await requireImport(buildUrl)
})

declare var requirejs:any
async function requireImport(url) {
  // 使用 amd 加载远程组件
  const resource = url.value + "?t=" + new Date().getTime()
  requirejs([url.value], (m) => {
    umd.value = m
  })
}

async function changeView(type){
  name.value = type
}
</script>
<style lang="scss" scoped>
.test-area{
  min-height: 300px;
  background-color: #f5f5f5;
  text-align: left;
}
.env-switch{
  display: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  button.dev{
    background: #646cff;
  }
  button.build{
    background: #00ffff;
  }
}
</style>
