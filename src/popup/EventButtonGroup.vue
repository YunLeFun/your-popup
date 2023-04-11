<script lang="ts" setup>
import { consola } from 'consola'
import { getActiveTab } from './utils'
import type { DevEvent } from '~/types'

defineProps<{
  eventsList: DevEvent[]
}>()

async function sendEventKey(key: string) {
  const activeTabId = await getActiveTab()
  if (!activeTabId)
    return

  const res = await browser.tabs.sendMessage(activeTabId, {
    type: 'dev-webext',
    name: 'event',
    key,
  })
  consola.info(res)
}
</script>

<template>
  <div v-if="eventsList.length" flex="~ col">
    <button
      v-for="event in eventsList"
      :key="event.key"
      class="my-1"
      flex="~"
      p="2"
      rounded
      border="~"
      text="xs"
      justify-center
      items="center"
      hover="bg-gray-200"
      active="border-blue-500"
      @click="sendEventKey(event.key)"
    >
      {{ event.title }}
    </button>
  </div>
</template>
