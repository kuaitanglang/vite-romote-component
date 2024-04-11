<template>
  <div >
    <button class="custom-style" @click="customEvent"
            :style="styles"> click times {{ count }}
    </button>
    <Button type="primary">主要按钮</Button>
  </div>
</template>

<script setup lang="ts">
import platform from "../platform";
import {ref, createApp} from 'vue'
import { Button } from 'vant';
import options from './config'
const props = defineProps({
  options: {
    type: Object,
    default: ()=>{
      return options
    }
  }
})
const styles = `
  width: ${props.options.width.value};
  height: ${props.options.height.value};
  margin: ${props.options.margin.value};
  padding: ${props.options.padding.value};
  ${props.options.styles.value}
`

let count = ref(0)


async function customEvent() {
  console.log(await platform)
  count.value++
  if(props.options.event.value){
    eval(props.options.event.value)
  }
}

</script>

<style scoped>
.custom-style{
  background: #747bff;
  color: #ffffff;
  width: 200px;
  height: 40px;
  font-size: 14px;
  font-weight: bolder;
}
</style>
