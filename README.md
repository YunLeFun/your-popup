# Your Popup (webext)

Register Popup in your browser.

## Why your-popup?

When dev.

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

For Firefox developers, you can run the following command instead:

```bash
pnpm start:firefox
```

`web-ext` auto reload the extension when `extension/` files changed.

> While Vite handles HMR automatically in the most of the case, [Extensions Reloader](https://chrome.google.com/webstore/detail/fimgfedafeadlieiabdeeaodndnlbhid) is still recommanded for cleaner hard reloading.

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `extension`, you can upload `extension.crx` or `extension.xpi` to appropriate extension store.
