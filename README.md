# uas-public-stat

(Open the tool here)[https://wellosoft.net/uas-public-stat]

This is a tool to leverage public statistics for Asset store packages for given publisher id.

It does work by fetching internal asset store API then use (cors-anywhere)[https://cors-anywhere.herukoapp.com] to bypass CORS.

Few examples of public statistics that exposed in this tool are like package ID, exact update date, hotness/populariy score, etc. There also icons that when clicked, will opening a new tab to asset store page of clicked asset.

Configuration will be saved in `localStorage` while responses are cached in `sessionStorage`. I don't put cookies or analytics in this tool.

## Disclaimer

This is an unnoficial tool. Feel free to fill an issue in issues tab.

[Also see here](main.js#L18)