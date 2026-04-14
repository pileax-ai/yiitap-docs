# ODocToc

## API
<component-doc path="vue/components/common/ODocToc" />

## Usage
```vue
<template>
  <YiiEditor ref="yiiEditor" v-bind="options" />
  <o-doc-toc
      ref="tocRef"
      :editor="yiiEditor?.editor"
      :max-level="3"
      @doc-scroll="onDocScroll"
  />
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { YiiEditor, ODocToc } from '@yiitap/vue';

const yiiEditor = ref<InstanceType<typeof YiiEditor>>()
const tocRef = ref<InstanceType<typeof ODocToc>>()

function onDocScroll(event: Event) {
  // If docScroll event not emitted, 
  // use tocRef.value?.onScroll(event) to update toc progress when scrolling.
  // console.debug('docScroll', event)
}
</script>
```

::: tip
OTocDoc will listen to the scroll event of editor's container by default, and the progress of TOC item is updated synchronously.

If scroll on editorContainer doesn't work, use exposed onScroll directly. e.g: tocRef.value?.onScroll(event).
:::