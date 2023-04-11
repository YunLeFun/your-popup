export async function getActiveTab() {
  const tabs = await browser.tabs.query({
    active: true,
    currentWindow: true,
  })
  const activeTabId = tabs[0].id
  return activeTabId
}
