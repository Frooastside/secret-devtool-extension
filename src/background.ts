let active = false;

function notifyClick(): void {
    console.log("Extension got abused!")
}

chrome.action.onClicked.addListener((tab) => {
    active = !active;
    chrome.scripting.executeScript({
        target: {tabId: tab.id ? tab.id : -1},
        func: notifyClick,
        args: []
    }).then();
});
