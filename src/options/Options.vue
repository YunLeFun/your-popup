<script setup lang="ts">
import { appBcId } from '~/logic/storage'
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <img src="/assets/icon.svg" class="icon-btn mx-2 text-2xl" alt="extension icon">
    <div>Options</div>
    <SharedSubtitle />

    <label mr="2">
      <span>App Broadcast Channel ID:</span>
    </label>
    <input v-model="appBcId" class="border border-gray-400 rounded px-2 py-1 mt-2" text="xs">

    <div class="mt-4">
      Powered by
      <a href="https://github.com/YunYouJun" target="_blank">@YunYouJun</a>
      <ri-device-line class="align-middle inline-block" />
    </div>
  </main>
</template>
