# YiiEditor

## API
<component-doc path="vue/components/YiiEditor" />

## Usage
```vue
<template>
  <YiiEditor ref="yiiEditor" v-bind="options" @update="onUpdate" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { YiiEditor } from '@yiitap/vue';
import '@yiitap/vue/dist/vue.css';

const yiiEditor = ref<InstanceType<typeof YiiEditor>>();

const options = computed(() => {
  return {
    content: '',
    showMainMenu: false,
    showBubbleMenu: true,
    showSideMenu: true,
    pageView: 'page',
  }
})

function onUpdate({ json, html }: { json: any; html: string }) {
  console.log('update', json)
  console.log('update', html);
}
</script>
```