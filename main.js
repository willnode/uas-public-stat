const pageMaxItems = 25;
const apiUrl = 'https://cors-anywhere.herokuapp.com/https://www.assetstore.unity3d.com/api/en-US/search/results.json';

var data = {
    data: JSON.parse(localStorage['uas-data'] || '{"total": 0, "results":[] }'),
    page: 1,
    pageMax: 1,
    pubId: localStorage['uas-id'] || 0,
    request: function () {
        var url = `${apiUrl}?q=publisher%3A${data.pubId}&rows=${pageMaxItems}&page=${data.page}&order_by=popularity`
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data.data = JSON.parse(localStorage['uas-data'] = this.responseText);
                data.pageMax = Math.ceil(data.data.total / pageMaxItems) || 1;
                localStorage['uas-id']=data.pubId;
            }
        };
        xhr.open("GET", url, true);
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
