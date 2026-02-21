# Getting Started

<p class="badges">
    <a href="https://www.npmjs.com/package/@yiitap/vue" target="_blank">
        <img src="https://img.shields.io/npm/v/@yiitap/vue.svg?label=npm" alt="Version" /></a>
    <a href="https://github.com/pileax-ai/yiitap" target="_blank">
        <img src="https://img.shields.io/github/stars/pileax-ai/yiitap?style=social" alt="GitHub Repo stars" />
    </a>
</p>

## Installation

:::tabs
== Vue
```shell
# npm
npm -i @yiitap/vue

# yarn
yarn add @yiitap/vue

# pnpm
pnpm add @yiitap/vue
```
== React
`Warning` The implementation for React are still under construction. Please stay tuned.

```shell
# npm
npm -i @yiitap/react

# yarn
yarn add @yiitap/react

# pnpm
pnpm add @yiitap/react
```
:::

## Usage

After installing, import [YiiEditor]() in your app.

:::tabs
== Vue
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
    sideMenu: {
      show: true,
      add: 'menu',
    },
    pageView: 'page',
  }
})

function onUpdate({ json, html }: { json: any; html: string }) {
  console.log('update', json)
  console.log('update', html);
}
</script>
```
For a complete example, please refer to: [Demo](https://github.com/pileax-ai/yiitap/blob/main/apps/vue/src/components/Demo.vue)
== React
```jsx typescript
import { useState } from 'react'
import { YiiEditor } from '@yiitap/react'
import '@yiitap/react/dist/vue.css'

function App() {
  return (
    <>
      <YiiEditor />
    </>
  )
}

export default App
```
For a complete example, please refer to: [Demo](https://github.com/pileax-ai/yiitap/blob/main/apps/react/src/App.jsx)
:::

## More

Check out the documentation for more information:
- [YiiEditor API](/api/component/vue/yii-editor) 
- [Editor instance](https://tiptap.dev/docs/editor/api/editor)
