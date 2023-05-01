<script setup lang="ts">
// popup in chrome extension
import { consola } from 'consola'
import EventButtonGroup from './EventButtonGroup.vue'
import { getActiveTab } from './utils'
import type { DevEvent } from '~/types'
import { appBcId } from '~/logic'

async function openOptionsPage() {
  browser.runtime.openOptionsPage()
}

const eventsList = ref<DevEvent[]>()

onMounted(async () => {
  const activeTabId = await getActiveTab()
  if (!activeTabId)
    return

  const res = await browser.tabs.sendMessage(activeTabId, {
    name: 'mounted',
  })
  consola.info(res)
  eventsList.value = res
})
</script>

<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700">
    <Logo />
    <div>Your Popup </div>
    <div>
      <span op="70" text="xs">ID: {{ appBcId }}</span>
    </div>
    <!-- <SharedSubtitle /> -->

    <button class="btn mt-2" @click="openOptionsPage">
      Open Options
    </button>

    <EventButtonGroup mt="2" :events-list="eventsList || []" />
    <!-- <div class="mt-2">
      <span class="opacity-50">Storage:</span> {{ storageDemo }}
    </div> -->
  </main>
</template>
