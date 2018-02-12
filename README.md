# uas-public-stat

[Open the tool here](https://wellosoft.net/uas-public-stat)

This is a tool to leverage public statistics for Asset store packages for given [publisher ID](https://i.imgur.com/uBFYQMA.png).

It does work by fetching internal asset store API then using [cors-anywhere](https://cors-anywhere.herokuapp.com) to bypass CORS restriction.

Few examples of public statistics that exposed in this tool are like package ID, exact update date, hotness/populariy score, etc. There also icons that when clicked, will opening a new tab to asset store page of clicked asset.

Configuration will be saved in `localStorage` while responses are cached in `sessionStorage`. I don't put cookies or analytics in this tool.

## Hotness Difference

This tool also tracks the hotness of every package that you're looking for. Tracking works by caching the initial hotness the first time it appeared and then calculated with difference with current hotness value. The cache is saved in `localStorage` so it doesn't expire.

Note the first time you using this tool there's nothing to compare. Wait for few hours before retrying if you want to see the difference.

You can clear the cache by clicking `Reset Hotness Difference` near bottom of page. It also worth to note that UT usually change the hotness rating every few hours even though it's a pretty small difference.

## Disclaimer

This is an unnoficial tool. Feel free to fill an issue in issues tab.

[Also see here](main.js#L18)

## Related

[I also made another similar tool](https://github.com/willnode/uas-private-stat/).

[unitybuzz.com](http://unitybuzz.com) <- This site have better (and server-based) asset tracking over time.
