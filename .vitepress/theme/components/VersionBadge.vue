<script setup lang="ts">
import pkg from '../../../package.json'
defineProps<{
  package: string
}>()
</script>

<template>
  <a
      :href="`https://www.npmjs.com/package/${package}/v/${pkg.version}`"
      target="_blank"
      rel="noopener noreferrer"
  >
    <div class="name">{{ package }}</div>
    <div class="version">v{{pkg.version}}</div>
  </a>
</template>

<style scoped>
a {
  display: flex;
  align-items: center;
  font-size: 12px;
  text-decoration: none;
  color: #ffffff;
  height: 20px;
  line-height: 20px;

  &:hover {
    color: #ffffff;
  }

  .name {
    background: #3E454E;
    padding: 0 6px;
    border-radius: 4px 0 0 4px;
  }
  .version {
    background: var(--vp-c-brand);
    padding: 0 6px;
    border-radius: 0 4px 4px 0;
  }
}
</style>