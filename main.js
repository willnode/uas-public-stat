const pageMaxItems = 25;
const apiUrl = 'https://cors-anywhere.herokuapp.com/https://www.assetstore.unity3d.com/api/en-US/search/results.json';
const showPublisherRegex = /^\d+/;
const shouldShowPublisher = function (s) { return !showPublisherRegex.test(s); }

var data = {
	data: JSON.parse(sessionStorage['uas-public-data'] || '{"total": 0, "results":[] }'),
	page: 1,
	pageMax: 1,
	pubId: localStorage['uas-id'] || '',
	order: localStorage['uas-order'] || 'popularity',
	hotnessDB: JSON.parse(localStorage['uas-public-hotness'] || "{}"),
	orderChoices: ['popularity', 'name', 'price', 'rating', 'updated'],
	message: '',
	showPublishers: shouldShowPublisher(localStorage['uas-id']),
	resetHotnessDB: function () { data.hotnessDB = {}; localStorage.removeItem('uas-public-hotness'); },
	request: function () {

		// Turns out from this single API I can leverage other powerful search query here.
		// This also means that this tool can be a light alternative for searching assets.
		// Unfornatunely, I haven't check the EULA for that :/
		// Anyway I will make this easier by assuming comma for separated query.
		var url = `${apiUrl}?q=publisher%3A${(data.pubId + "").replace(/,/g, '&q=')
			}&q=type:content&rows=${pageMaxItems}&page=${data.page}&order_by=${data.order}`;

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (this.readyState == 4) {
				if (this.status == 200) {
					var d = JSON.parse(sessionStorage['uas-public-data'] = this.responseText);
					var hDB = data.hotnessDB;
					d.results.forEach(el => {
						if (hDB[el.id] === undefined)
							hDB[el.id] = el.hotness;
					});
					localStorage['uas-public-hotness'] = JSON.stringify(data.hotnessDB = hDB);
					data.data = d;
					data.pageMax = Math.ceil(data.data.total / pageMaxItems) || 1;
					localStorage['uas-id'] = data.pubId;
					localStorage['uas-order'] = data.order;
					data.showPublishers = shouldShowPublisher(data.pubId);
					data.message = '';
				} else {
					data.message = `⛔ Failed to receive request (${this.status})`;
				}
			} else {
				data.message = '🔃 Sending request...';
			}
		};
		xhr.ontimeout = function () {
			data.message = `⛔ Request timed out`;
		}
		xhr.open("GET", url, true);
		xhr.timeout = 10000; // Sometimes it does not reply at all.
		xhr.setRequestHeader("accept", "application/json")
		xhr.send();
	}
};

data.pageMax = Math.ceil(data.data.total / pageMaxItems) || 1;

(() => {
	new Vue({
		el: "#app",
		data: data
	});
})();
