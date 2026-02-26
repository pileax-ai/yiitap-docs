<template>
  <article class="layout">
    <header class="layout-toolbar">
      <o-main-menu
          :editor="yiiEditor?.editor"
          :menu="options.mainMenu"
          :data-theme="isDark ? 'dark' : ''"
      >
        <template #left>
          <o-divider vertical />
          <o-popover
              ref="popover"
              tippy-class="o-ai-settings-popover"
              class="o-simple-command-btn"
              placement="bottom"
              trigger="click"
              arrow
          >
            <template #trigger>
              <o-command-btn
                  icon="settings"
                  tooltip="Settings"
              >
              </o-command-btn>
            </template>

            <div>
              <o-btn-group class="o-btn-group">
                <div data-tippy-role="tooltip">
                  <o-btn label="OpenAI"
                         class="o-btn"
                         :class="{ 'active': aiOption.provider === 'openai' }"
                         @click="aiOption.provider = 'openai'" />
                </div>
                <div data-tippy-role="tooltip">
                  <o-btn label="DeepSeek"
                         :class="{ 'active': aiOption.provider === 'deepseek' }"
                         @click="aiOption.provider = 'deepseek'" />
                </div>
              </o-btn-group>
            </div>

            <div>
              <o-input ref="input"
                       v-model="aiOption.apiKey"
                       type="text"
                       placeholder="API Key"
                       class="o-input"
                       autofocus clearable>
                <template #prefix>
                  <o-icon name="search" class="o-tips" />
                </template>
              </o-input>
            </div>
          </o-popover>
        </template>
      </o-main-menu>
    </header>

    <section class="layout-content">
      <YiiEditor ref="yiiEditor" v-bind="options" />
    </section>

    <aside class="layout-toc">
      <o-doc-toc
          ref="tocRef"
          :editor="yiiEditor?.editor"
          :max-level="3"
      />
    </aside>
  </article>
</template>

<script setup lang="ts">
import { computed, ref, provide, watch, onMounted, onUnmounted } from 'vue';
import { useData } from 'vitepress';
import {
  YiiEditor,
  ODocToc,
  OMainMenu,
  OCommandBtn,
  ODivider,
  OIcon,
  OInput,
  OBtn,
  OBtnGroup,
  OPopover,
  OStarterKit,
} from '@yiitap/vue';
import '@yiitap/vue/dist/vue.css';
import { BasicFeaturesArticle, BasicFeaturesArticleZh } from '../../data/demo/article';
import 'katex/dist/katex.min.css'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const { isDark } = useData();

const localeAlt = ref('en')
const yiiEditor = ref<InstanceType<typeof YiiEditor>>()
const tocRef = ref<InstanceType<typeof ODocToc>>()
const aiOption = ref<AiOption>({
  provider: 'deepseek',
})
provide('locale', localeAlt)

const options = computed(() => {
  return {
    aiOption: aiOption.value,
    // locale: locale.value,
    darkMode: isDark.value,
    // editable: editable.value,
    title: true,
    content: props.locale === 'zh' ? BasicFeaturesArticleZh : BasicFeaturesArticle,
    showMainMenu: false,
    showBubbleMenu: true,
    showFloatingMenu: true,
    sideMenu: {
      show: true,
      add: 'empty',
    },
    // showSideNode: true,
    pageView: 'page',
    mainMenu: [
      'bold',
      'italic',
      'text-format-dropdown',
      'separator',
      'heading',
      'font-family',
      'text-color-dropdown',
      'color',
      'background-color',
      'highlight',
      'clearFormat',
      'separator',
      'align-dropdown',
      'separator',
      'horizontalRule',
      'blockquote',
      'details',
      'list-dropdown',
      'codeBlock',
      'link',
      'table',
      'callout',
      'emoji',
      'aiBlock',
      'extension-dropdown',
    ],
    extensions: [
      OStarterKit.configure(),
      'InlineMath',
      'Markdown',
      'OAudio',
      'OAiBlock',
      'OBlockMath',
      'OColon',
      'OColorHighlighter',
      'ODetails',
      'OImage',
      'OModelViewer',
      'OMultiColumn',
      'OShortcut',
      'OVideo',
    ],
  }
})

function init() {
  localeAlt.value = props.locale
  try {
    const aiOptionString = localStorage.getItem('yiitap.ai.option')
    if (aiOptionString) {
      aiOption.value = JSON.parse(aiOptionString)
    }
  } catch (e) {
    // ignore
  }
}

const onScroll = (event: Event) => {
  tocRef.value?.onScroll(event);
}

watch(
    aiOption,
    (newValue) => {
      localStorage.setItem('yiitap.ai.option', JSON.stringify(aiOption.value))
    },
    { deep: true }
)

onMounted(async () => {
  init()
  window.addEventListener("scroll", onScroll);
  await import('@google/model-viewer');
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.layout {
  padding-top: 40px;
}

.layout-toolbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--vp-c-bg);
  z-index: 10;
}

.layout-toc {
  position: fixed;
  top: 120px ;
  right: 10px;
  z-index: 101;
}

.o-input {
  width: 400px;
}

.o-btn-group {
  margin-bottom: 10px;

  .o-btn.active {
    color: white !important;
    background: var(--vp-button-brand-bg);

    .o-btn__label {
      color: white !important;
    }

    &:hover {
      background: var(--vp-button-brand-hover-bg)!important;
    }
  }
}
</style>