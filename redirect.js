browser.spacesToolbar.addButton('GoogleNews', {
    title: browser.i18n.getMessage("toolbarButtonTitle"),
    defaultIcons: "skin/google_news_icon.svg",
    url: "https://news.google.com/"
});

browser.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (let header of details.requestHeaders) {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0";
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["https://news.google.com/*", "https://*.google.com/*"] },
  ["blocking", "requestHeaders"]
);

// Create the context menu item
browser.menus.create({
  id: "search-google-news",
  title: browser.i18n.getMessage("contextMenuTitle"),
  contexts: ["selection"]
});

// Add a listener for when the menu item is clicked
browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-google-news" && info.selectionText) {
    // Encode the selected text to make it URL-safe
    const query = encodeURIComponent(info.selectionText);
    const searchUrl = `https://news.google.com/search?q=${query}`;
    
    // Open the search URL in a new content tab
    browser.tabs.create({ url: searchUrl });
  }
});
