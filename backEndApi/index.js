var express = require("express");
var app = express();
var axios = require('axios');
var data = '{}';
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var config = {
    method: 'post',
    url: 'https://connect.ongage.net/125928/api/reports/domains_volumes?domains_distribution',
    headers: {
        'Accept': '*/*',
        'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'AWSELB=231D2DA912A7F333A8A20A4CC4661CB57A5E32B00FE279E2DAACB59CFA18CEB594691B68574904266E301412C03E65F3BC02613C82BEF93D4D51D3772AF2719B63CBBBA118; AWSELBCORS=231D2DA912A7F333A8A20A4CC4661CB57A5E32B00FE279E2DAACB59CFA18CEB594691B68574904266E301412C03E65F3BC02613C82BEF93D4D51D3772AF2719B63CBBBA118; _ga=GA1.2.1305926256.1649436665; _gid=GA1.2.468429994.1649436665; menu_state=%7B%7D; is_menu_narrow=true; grid_page_size=75; session=b68ff58ee3d758d8e21f733077a04f5752ce718e~6251edf7c3cac7-44257421; _dc_gtm_UA-36348290-1=1; AWSELB=231D2DA912A7F333A8A20A4CC4661CB57A5E32B00F28C74DD2A078E29CE9625DE4D52B97CA4904266E301412C03E65F3BC02613C82BEF93D4D51D3772AF2719B63CBBBA118; AWSELBCORS=231D2DA912A7F333A8A20A4CC4661CB57A5E32B00F28C74DD2A078E29CE9625DE4D52B97CA4904266E301412C03E65F3BC02613C82BEF93D4D51D3772AF2719B63CBBBA118; session=d5791755ab7e62920983d3f9f6af4d8ee61ecc9e~625216ad5c5794-56025891',
        'Origin': 'https://connect.ongage.net',
        'Referer': 'https://connect.ongage.net/125928/list',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Token': 'a385b808d1c03fceb9529e0cf2b46b4f138604a317fd8c9914e981ddfd3fea81',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Mobile Safari/537.36',
        'X-Request-IR': 'true',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'x_username': 'jason@startinboxing.com',
        'x_password': 'W3bMasterTemp!!',
        'x_account_code': 'ingenius_marketing'
    },
    data: data
};

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


app.listen(3033, () => {
    console.log("Server running on port 3033");
});
app.get("/domain_volumes", (req, res, next) => {
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
            res.json(error)
        });
});




// app.get("/reports/query/:type", (req, res, next) => {
//     console.log(req.params.type)
//     var queryData = `{"select":[[${req.params.type},"total"]],"from":"list","group":[["record_date","week"]],"order":[["record_date","asc"]],"filter":[["record_date",">=",1646798400],["record_date","<=",1649563199]],"is_list_growth":true}`;
//     var queryConfig = {
//         method: 'post',
//         url: 'https://api.ongage.net/api/reports/query',
//         headers: {
//             'x_username': 'jason@startinboxing.com',
//             'x_password': 'W3bMasterTemp!!',
//             'x_account_code': 'ingenius_marketing',
//             'Content-Type': 'text/plain'
//         },
//         data: queryData
//     };
//     axios(queryConfig)
//         .then(function (response) {
//             console.log(JSON.stringify(response.data));
//             res.json(response.data);
//         })
//         .catch(function (error) {
//             console.log(error);
//             res.json(error)
//         });
//     console.log(req.params.type)
// });
// app.get('/something', (req, res) => {
//     req.query.color1 === 'red'  // true
//     req.query.color2 === 'blue' // true
// })
// app.get('/path/:name', function (req, res) { // url: /path/test
//     console.log(req.params.name);  // result: test
// });

// // OR

app.get('/path', function (req, res) {  // url: /path?name='test'
    console.log(req.query['name']);  // result: test
    console.log(req.params.type)
    var queryData = `{"select":[["${req.query['name']}","total"]],"from":"list","group":[["record_date","week"]],"order":[["record_date","asc"]],"filter":[["record_date",">=",1642132800],["record_date","<=",1649995199]],"is_list_growth":true}`;
    var queryConfig = {
        method: 'post',
        url: 'https://api.ongage.net/api/reports/query',
        headers: {
            'x_username': 'jason@startinboxing.com',
            'x_password': 'W3bMasterTemp!!',
            'x_account_code': 'ingenius_marketing',
            'Content-Type': 'text/plain'
        },
        data: queryData
    };
    axios(queryConfig)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
            res.json(error)
        });
    console.log(req.params.type)
});