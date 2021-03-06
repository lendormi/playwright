/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fs = require('fs');
const path = require('path');
const {Playwright} = require('./lib/server/playwright.js');
const {localDownloadOptions} = require('./download-browser.js');

const playwright = new Playwright({
  browsers: ['webkit', 'chromium', 'firefox'],
});

if (fs.existsSync(path.join(__dirname, '.local-browsers'))) {
  playwright.chromium._executablePath = localDownloadOptions('chromium').executablePath;
  playwright.firefox._executablePath = localDownloadOptions('firefox').executablePath;
  playwright.webkit._executablePath = localDownloadOptions('webkit').executablePath;
}

module.exports = playwright;

