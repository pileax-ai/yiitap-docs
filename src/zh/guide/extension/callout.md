# Callout <version-badge package="@yiitap/extension-callout" />

> Callout

## Installation

:::tabs
== npnm
```shell
pnpm add @yiitap/extension-callout
```
== yarn
```shell
yarn add @yiitap/extension-callout
```
== npm
```shell
npm -i @yiitap/extension-callout
```
:::

## Usage

:::tabs
== Vue
```ts
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import Callout from '@yiitap/extension-callout'
import type { CalloutOptions } from '@yiitap/extension-callout'
import View from './view.vue'

const OCallout = Callout.extend<CalloutOptions>({
  addNodeView() {
    return VueNodeViewRenderer(View)
  },
})

export default OCallout
```
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
:::

## More

Check out the documentation for the [YiiEditor]() and [full list of editor extensions](https://vitepress.dev/guide/markdown).
