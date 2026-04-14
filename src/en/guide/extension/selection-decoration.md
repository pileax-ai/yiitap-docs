# Selection Decoration <version-badge package="@yiitap/extension-selection-decoration" />

> Add decoration to selection when editor is blur.

## Installation

:::tabs
== npnm
```shell
pnpm add @yiitap/extension-selection-decoration
```
== yarn
```shell
yarn add @yiitap/extension-selection-decoration
```
== npm
```shell
npm -i @yiitap/extension-selection-decoration
```
:::

## Usage

:::tabs
== Vue
### Yiitap
> SelectionDecoration is enabled by default in Yiitap.


### Tiptap
```vue
<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import SelectionDecoration from '@yiitap/extension-selection-decoration'

const editor = useEditor({
    extensions: [
      SelectionDecoration
    ],
})
</script>
```

== React
```jsx typescript
// 
```
:::

### Style
After `SelectionDecoration` extension enabled, A '.selection-decoration-blur' class will apply to the selected content when editor is blur, so you can use this to stylize:

```css
.ProseMirror .selection-decoration-blur {
    background: #ACCEF7;
}
```

## More

[View Source](https://github.com/pileax-ai/yiitap/blob/main/packages/extensions/selection-decoration/src/selection-decoration.ts)
