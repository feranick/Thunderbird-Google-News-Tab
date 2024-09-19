# Google News Tab
Unofficial Google News add-on for Thunderbird, it adds a button that opens a Google News tab in Thunderbird.
The [home page](https://addons.mozilla.org/thunderbird/addon/thundernews/) of the extension contains some pictures and reviews.

#### Installing 
A new Google News icon should appear in the top-right corner of Thunderbird. Click to open.

#### Installing from sources
Download the repository, zip it, rename it to Google-News-Tab.xpi and choose install addon from file in Thunderbird.

In linux the xpi file can be created with the following commands
* `git clone https://github.com/feranick/Thunderbird-Google-News-Tab`
* `cd ./Thunderbird-Google-News-Tab`
* `VERSION=$(cat ./manifest.json | jq --raw-output '.version')`
* `zip -r "../Google-News-Tab-${VERSION}-tb.xpi" *`
