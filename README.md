# Leetcode Patrol

Leetcode Patrol is a Chrome extension designed to help you stay focused by blocking access to specified OTT platforms until you have visited LeetCode and solved at least one problem.

## Features

- **Block OTT Platforms**: Blocks access to user-specified OTT platforms until you have visited and solved at least one problem on LeetCode.
- **Daily Reset**: Resets the LeetCode visit and problem-solving status every day at midnight, so you start each day with a fresh focus.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/productivity-guardian.git
    ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" using the toggle in the top-right corner.

4. Click "Load unpacked" and select the directory where you cloned the repository.

## Usage

1. **Set Up OTT Platforms**:
    - Click on the extension icon in the Chrome toolbar.
    - Select "Options" to open the options page.
    - Enter the OTT platform URLs you want to block (e.g., `netflix.com`, `hulu.com`, etc.) and save the settings.

2. **Visit LeetCode**:
    - Navigate to [LeetCode](https://leetcode.com).
    - Solve at least one problem by visiting a problem page and submitting a correct solution.

3. **Access OTT Platforms**:
    - After solving a problem on LeetCode, you will be able to access the specified OTT platforms for the rest of the day.
    - The extension will reset at midnight, requiring you to visit and solve a problem on LeetCode again the next day.

## Development

### Files and Directories

- `manifest.json`: Configuration file for the Chrome extension.
- `background.js`: Contains the background script for the extension.
- `options.html`: HTML file for the options page.
- `options.js`: JavaScript file for handling the options page logic.
- `block.html`: HTML file displayed when an OTT platform is blocked.
- `styles.css`: Stylesheet for the extension.

## Acknowledgments

- Inspired by the need to stay focused and avoid distractions.
---

Feel free to reach out if you have any questions or need further assistance!

