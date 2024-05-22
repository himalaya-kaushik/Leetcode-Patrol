function initializeListeners(ottPlatforms) {
    chrome.webNavigation.onCompleted.addListener(
      function (details) {
        if (details.url.includes("leetcode.com")) {
          chrome.storage.local.set({ leetcodeVisited: true });
        }
  
        // Check if the user is on a LeetCode problem page
        const leetcodeProblemPattern = /leetcode\.com\/problems\//;
        if (leetcodeProblemPattern.test(details.url)) {
          // Assume the user has solved a problem after visiting a problem page
          chrome.storage.local.set({ problemSolved: true });
        }
  
        // Check if the user has visited a submission page
        const leetcodeSubmissionPattern = /leetcode\.com\/problems\/.*\/submissions\/\d+\//;
        if (leetcodeSubmissionPattern.test(details.url)) {
          // Assume the user has solved a problem if they have visited a submission page
          chrome.storage.local.set({ problemSolved: true });
        }
      },
      { url: [{ urlMatches: "leetcode.com" }] }
    );
  
    chrome.webNavigation.onBeforeNavigate.addListener(
      function (details) {
        const visitingOTT = ottPlatforms.some((platform) =>
          details.url.includes(platform)
        );
  
        if (visitingOTT) {
          chrome.storage.local.get(["leetcodeVisited", "problemSolved"], function (result) {
            if (!(result.leetcodeVisited && result.problemSolved)) {
              chrome.tabs.update(details.tabId, {
                url: chrome.runtime.getURL("block.html"),
              });
            }
          });
        }
      }
    );
  
    chrome.tabs.onActivated.addListener(function (activeInfo) {
      chrome.tabs.get(activeInfo.tabId, function(tab) {
        const visitingOTT = ottPlatforms.some((platform) =>
          tab.url.includes(platform)
        );
  
        chrome.storage.local.get(["leetcodeVisited", "problemSolved"], function (result) {
          if (visitingOTT && !(result.leetcodeVisited && result.problemSolved)) {
            chrome.tabs.update(tab.id, {
              url: chrome.runtime.getURL("block.html"),
            });
          }
        });
      });
    });
  }
  
  chrome.storage.local.get(["ottPlatforms"], function (result) {
    let ottPlatforms = result.ottPlatforms || [
      "netflix.com",
      "hulu.com",
      "primevideo.com",
      "hotstar.com",
      "jiocinema.com",
    ];
    initializeListeners(ottPlatforms);
  });
  