# 快速开始

<p class="badges">
    <a href="https://www.npmjs.com/package/@yiitap/vue" target="_blank">
        <img src="https://img.shields.io/npm/v/@yiitap/vue.svg?label=npm" alt="Version" />
    </a>
    <a href="https://github.com/pileax-ai/yiitap" target="_blank">
        <img src="https://img.shields.io/github/stars/pileax-ai/yiitap?style=social" alt="GitHub Repo stars" />
    </a>
</p>

## 安装

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
`提示` React版本的Yiitap还在构建中，请保持关注。
```shell
# npm
npm -i @yiitap/react

# yarn
yarn add @yiitap/react

# pnpm
pnpm add @yiitap/react
```
:::

## 使用

安装后，在你的App中使用 YiiEditor。

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
完整的示例请参考: [Demo](https://github.com/pileax-ai/yiitap/blob/main/apps/vue/src/components/Demo.vue)
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
完整的示例请参考: [Demo](https://github.com/pileax-ai/yiitap/blob/main/apps/react/src/App.jsx)
:::

## 更多

若想了解更多信息，可查看相关文档:
- [YiiEditor API](/zh/api/component/vue/yii-editor)
- [Editor instance](https://tiptap.dev/docs/editor/api/editor)
