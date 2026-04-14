# OMainMenu

## API
<component-doc path="vue/components/menus/OMainMenu" />

## Usage
```vue
<template>
  <YiiEditor ref="yiiEditor" v-bind="options" />
  <o-main-menu
      :editor="yiiEditor?.editor"
      v-if="editor?.isEditable"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { YiiEditor, OMainMenu } from '@yiitap/vue'

const yiiEditor = ref<InstanceType<typeof YiiEditor>>()

const editor = computed(() => {
  return yiiEditor.value?.editor
})
</script>
```

::: tip
Show or hide OMainMenu use [YiiEditor](../yii-editor)'s property `showMainMenu`.
:::