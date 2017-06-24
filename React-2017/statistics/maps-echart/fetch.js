fetch('https://cdn.xgqfrms.xyz/json/cats.json', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then(function(response) {
        return response.json()
}).then(function(json) {
        console.log('parsed json: ', json)
}).catch(function(error) {
      console.log('parsing failed: ', error)
});


// https://cdn.xgqfrms.xyz/logo/icon.png

fetch('https://echarts.baidu.com/asset/map/json/china.json', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then(function(response) {
        return response.json()
}).then(function(json) {
        console.log('parsed json: ', json)
}).catch(function(error) {
      console.log('parsing failed: ', error)
});

