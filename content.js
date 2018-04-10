chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === 'gecko655/GitHub-ForceRender') {
    $("form.js-prose-diff-toggle-form")
      .each(function(idx, node){if(idx%2!=0){node.children[1].click();}})
  }
});

