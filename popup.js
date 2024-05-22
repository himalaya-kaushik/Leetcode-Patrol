document.getElementById('resetButton').addEventListener('click', function() {
    chrome.storage.local.clear(function() {
      alert('LeetCode visit status has been reset.');
    });
  });
  
  document.getElementById('optionsLink').addEventListener('click', function() {
    chrome.runtime.openOptionsPage();
  });
  