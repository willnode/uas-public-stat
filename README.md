# uas-public-stat

[Open the tool here](https://wellosoft.net/uas-public-stat)

This is a tool to leverage public statistics for Asset store packages for given [publisher ID](https://i.imgur.com/uBFYQMA.png).

It does work by fetching internal asset store API then using [cors-anywhere](https://cors-anywhere.herukoapp.com) to bypass CORS restriction.

Few examples of public statistics that exposed in this tool are like package ID, exact update date, hotness/populariy score, etc. There also icons that when clicked, will opening a new tab to asset store page of clicked asset.

Configuration will be saved in `localStorage` while responses are cached in `sessionStorage`. I don't put cookies or analytics in this tool.

## Hotness Difference

This tool also tracks the hotness of every package that you looking with this tool. Tracking works by caching the initial hotness the first time it appeared and calculate the difference with current hotness value. The cache is saved in `localStorage` so it doesn't expire.

You can also clear that cache by clicking `Reset Hotness Difference` in the bottom of page. It also worth to note that UT usually change the hotness rating every 1-2 hour even though it's a darn pretty small difference.

## Disclaimer

This is an unnoficial tool. Feel free to fill an issue in issues tab.

[Also see here](main.js#L18)

## Related

[I also made another similar tool](https://github.com/willnode/uas-private-stat/)
