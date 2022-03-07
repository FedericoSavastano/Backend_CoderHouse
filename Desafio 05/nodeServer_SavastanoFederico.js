let http = require('http');

const server = http.createServer((req, res) => {
    const randomNum = (min, max) => Math.round(Math.random() * max + min);
    const randomNumFloat = (min, max) => (Math.random() * max + min).toFixed(2);

    let sendObj = {
        id: randomNum(1, 10),
        title: 'Producto ' + randomNum(1, 10),
        price: randomNumFloat(0.0, 9999.99),
        thumbnail: 'Foto ' + randomNum(1, 10),
    };

    res.end(JSON.stringify(sendObj));
});

server.listen(8080, () => console.log('Listening to port 8080'));
