import { events } from './events'

const WEBEXT_ID = 'your-popup'

/**
 * register popup ui
 */
export function registerPopup() {
  const popupBc = new BroadcastChannel(WEBEXT_ID)
  popupBc.postMessage({
    type: WEBEXT_ID,
    name: 'register',
    events: events.map((event) => {
      return {
        key: event.key,
        title: event.title,
      }
    }),
  })
}

/**
 * Register a listener for the popup
 * You can custom your channel id
 */
export function registerListen(channelName: string) {
  const customBc = new BroadcastChannel(channelName)
  customBc.onmessage = (e) => {
    const { data } = e
    const event = events.find(event => event.key === data.key)
    if (event)
      event.callback()
  }
}

export interface RegisterOptions {
  customBcId?: string
}

/**
 * main register
 */
export function register(options?: RegisterOptions) {
  options = options || {}

  registerPopup()
  registerListen(options.customBcId || 'custom')
}
