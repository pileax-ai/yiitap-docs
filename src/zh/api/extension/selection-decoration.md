# Selection Decoration <version-badge package="@yiitap/extension-selection-decoration" />

> 当编辑器失去焦点时，为所选内容添加装饰。

## 安装

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

## 使用

:::tabs
== Vue
### Yiitap
> 在 Yiitap 中 SelectionDecoration 默认启用。


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

### 样式设置
`SelectionDecoration` 扩展起启用后，当编辑器失去焦点时，`selection-decoration-blur` 类将会应用到所选内容上，所以你可以利用这一点来进行样式设置：

```css
.ProseMirror .selection-decoration-blur {
    background: #ACCEF7;
}
```

## 更多

[查看源码](https://github.com/pileax-ai/yiitap/blob/main/packages/extensions/selection-decoration/src/selection-decoration.ts)
