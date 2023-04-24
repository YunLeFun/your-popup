# Your Popup (webext)

<p align='center'>
<a href="https://github.com/antfu/vitesse/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

Register Popup in your browser.

![Preview](https://user-images.githubusercontent.com/25154432/234032515-70f24a0d-e405-49d4-84c5-8002ff9d573a.jpg)

![usage](https://user-images.githubusercontent.com/25154432/234032965-19c37bd8-f1e2-496b-9c45-a67dfd1c001e.gif)

## Why your-popup?

在开发复杂项目时，我需要做很多操作以复现某种特殊状态，现在我们可以将对应的逻辑写在 popup 的回调事件里以快速执行。

而 popup 插件的形式可以避免遮挡页面内容，也不会影响页面的交互。

## Usage

可参考 [demo](./demo) 项目用法。

- 拷贝 `demo/src/popup` 文件夹内容
- 在项目 `main` 中（开发环境）引入 `popup` `register`

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

### 自定义事件

你可以在你项目的 `popup/events` 数组中自定义任意事件。
但请确保 key 值惟一。

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
