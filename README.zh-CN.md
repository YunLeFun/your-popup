# Your Popup (webext)

![Chrome Web Store](https://img.shields.io/chrome-web-store/v/kjadfoikckkkbdnkkfglbpbemiajbnfl)

（审核中...）

<p align='center'>
<a href="https://github.com/YunLeFun/your-popup/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

Register Popup in your browser.

> 帮助开发人员在开发时通过弹出窗口快速调用特定函数逻辑。

<p align="center">
<img src="https://user-images.githubusercontent.com/25154432/234032515-70f24a0d-e405-49d4-84c5-8002ff9d573a.jpg" alt="Preview" width="250" />
<br />
<img src="https://user-images.githubusercontent.com/25154432/234042320-bd8b5e66-3f48-4c45-8636-d220a3726d85.gif" alt="usage" />
</p>

前往 [Chrome 商店](https://chrome.google.com/webstore/) 安装 [your-popup](https://chrome.google.com/webstore/) 并查看 [demo](https://your-popup.yunle.fun/) 页面。

> 你也可以在 [release](https://github.com/YunLeFun/your-popup/releases) 中找到 `your-pop.crx`/`your-pop.zip`/`your-popup`文件下载并手动安装。

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
