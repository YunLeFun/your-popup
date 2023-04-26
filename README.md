# Your Popup (webext)

<p align='center'>
<b>English</b> | <a href="https://github.com/YunLeFun/your-popup/blob/main/README.zh-CN.md">简体中文</a>
<!-- Contributors: Thanks for getting interested, however we DON'T accept new transitions to the README, thanks. -->
</p>

Register Popup in your browser.

> Helps developers to quickly invoke logic through popup when they were developing.

<p align="center">
<img src="https://user-images.githubusercontent.com/25154432/234032515-70f24a0d-e405-49d4-84c5-8002ff9d573a.jpg" alt="Preview" width="250" />
<br />
<img src="https://user-images.githubusercontent.com/25154432/234042320-bd8b5e66-3f48-4c45-8636-d220a3726d85.gif" alt="usage" />
</p>

<!-- todo chrome store link -->
Install [your-popup](https://chrome.google.com/webstore/) and see this demo page.

## Why your-popup?

When developing complex projects, I need to do a lot of things to reproduce a particular state, and now we can write the corresponding logic in a popup callback event for quick execution.

The form of the popup plug-in can avoid blocking the content of the page and does not affect the interaction of the page.

## Usage

For details, see [demo](./demo) project usage.

- Copy the contents of the `demo/src/popup` folder
- Introduce `popup` `register` in project `main.ts` (development environment)

```ts
// main.ts
// register only when in development
if (import.meta.env.DEV) {
  import('./popup').then(({ register }) => {
    register({
      customBcId: 'custom',
    })
  })
}
```

> `customBcId` 可自定义，并保持与 popup option page 中配置一致。

### Custom Events

You can customize any event in your project's `src/popup/events` array.
But make sure the key value is unique.

```ts
import consola from 'consola'

export const events = [
  {
    key: 'echo-hello',
    title: '输出 Hello',
    callback: () => {
      consola.log('Hello')
    },
  },
  {
    key: 'echo-world',
    title: '输出 World',
    callback: () => {
      consola.log('World')
    },
  },
]
```

## Thanks

- [vitesse-webext](https://github.com/antfu/vitesse-webext)

## Pre-packed

### Folders

- `src` - main source.
  - `contentScript` - scripts and components to be injected as `content_script`
  - `background` - scripts for background.
  - `components` - auto-imported Vue components that are shared in popup and options page.
  - `styles` - styles shared in popup and options page
  - `assets` - assets used in Vue components
  - `manifest.ts` - manifest for the extension.
- `extension` - extension package root.
  - `assets` - static assets (mainly for `manifest.json`).
  - `dist` - built files, also serve stub entry for Vite on development.
- `scripts` - development and bundling helper scripts.

### Development

```bash
pnpm dev

```

Then **load extension in browser with the `extension/` folder**.

```bash
# see demo
pnpm demo
```

### Build

To build the extension, run

```bash
pnpm build
pnpm pack
# `extension.crx` or `extension.xpi` will be generated
```
