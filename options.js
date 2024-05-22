document.addEventListener('DOMContentLoaded', function() {
    const ottPlatformsInput = document.getElementById('ottPlatforms');
    const saveButton = document.getElementById('saveButton');
  
    // Load saved OTT platforms
    chrome.storage.local.get(['ottPlatforms'], function(result) {
      if (result.ottPlatforms) {
        ottPlatformsInput.value = result.ottPlatforms.join(', ');
      }
    });
  
    // Save OTT platforms
    saveButton.addEventListener('click', function() {
      const ottPlatforms = ottPlatformsInput.value.split(',').map(url => url.trim());
      chrome.storage.local.set({ ottPlatforms: ottPlatforms }, function() {
        alert('OTT platforms saved!');
      });
    });
  });
  