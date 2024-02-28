let activeTabID = null;
let activeWebUrl = null;
let startTime = null;

function startTimer(tabId, url) {
  activeTabID = tabId;
  activeWebUrl = url;
  startTime = new Date().getTime();
}

function stopTimer(tabId, url) {
  if (activeTabID !== null) {
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    console.log(`Time spent on ${activeWebUrl}: ${elapsedTime} milliseconds`);
    activeTabID = null;
    activeWebUrl = null;
    startTime = null;
  }
}

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab) {
      startTimer();
    }
  });
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  if (tabId === activeTabID) {
    stopTimer();
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === activeTabID && changeInfo.url) {
    stopTimer();
    startTime(tabId, changeInfo.url);
  }
});
