chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    id: "GitHub-ForceRender", 
    title: "Force Render images in this PR/commit page",
    documentUrlPatterns: [
        "https://github.com/*/*/pull/*/files",
        "https://github.com/*/*/pull/*/commits/*",
        "https://github.com/*/*/commit/*/files",
        "https://github.com/*/*/compare/*"
      ]
    }
  );
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.sendMessage(tab.id, {text: 'gecko655/GitHub-ForceRender'});
});
