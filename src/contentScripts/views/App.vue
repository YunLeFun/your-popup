<script setup lang="ts">
// import { useToggle } from '@vueuse/core'
// import 'uno.css'

import { appBcId } from '~/logic'
import type { DevEvent } from '~/types'

// const [show, toggle] = useToggle(false)
// widget in html

const bc = new BroadcastChannel('your-popup')

// todo refactor
const afBc = computed<BroadcastChannel>(() => {
  if (afBc.value)
    afBc.value.close()
  return new BroadcastChannel(appBcId.value)
})

async function sendEventList(eventsList: DevEvent[]) {
  await browser.runtime.sendMessage({
    eventsList,
  })
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // @ts-expect-error resp
  sendResponse('[content-script] Get event from popup')
})

bc.onmessage = async (event) => {
  const { data } = event
  if (data.type === 'your-popup' && data.name === 'register') {
    // register onMessage
    browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.name === 'mounted') {
        sendEventList(data.events)
      }
      else {
        afBc.value?.postMessage({
          name: request.key,
        })
      }

      // @ts-expect-error resp
      sendResponse('[content-script] Get mounted from popup')
    })
  }
}

// Chrome提供的大部分API是不支持在content_scripts中运行
// sendMessage onMessage 是可以使用
</script>

<template>
  <div class="fixed right-0 bottom-0 m-5 z-100 flex items-end font-sans select-none leading-1em">
    <!-- <div
      class="bg-white text-gray-800 rounded-lg shadow w-max h-min"
      p="x-4 y-2"
      m="y-auto r-2"
      transition="opacity duration-300"
      :class="show ? 'opacity-100' : 'opacity-0'"
    >
      <h1 class="text-lg">
        Dev WebExt
      </h1>
      <SharedSubtitle />
    </div>
    <div
      class="flex w-10 h-10 rounded-full shadow cursor-pointer"
      bg="teal-600 hover:teal-700"
      @click="toggle()"
    >
      <ri-device-line class="block m-auto text-white text-lg" />
    </div> -->

    <!-- <div
      class="flex w-10 h-10 rounded-full shadow cursor-pointer"
      bg="teal-600 hover:teal-700"
      @click="doIt()"
    >
      <ri-device-line class="block m-auto text-white text-lg" />
    </div> -->
  </div>
</template>
