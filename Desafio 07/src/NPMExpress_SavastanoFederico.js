// import fs from 'fs';
// import express from 'express';

// const app = express();
// const PORT = 8080;
// const server = app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
// });

// let viewsProducts = 0;
// let viewsOneProduct = 0;
// const fileRoute = './files/productos.txt';

// app.get('/items', (req, res) => {
//     let content = fs.readFileSync(fileRoute, 'utf-8');

//     res.send(`Items: ${JSON.stringify(JSON.parse(content))},
//     cantidad: ${JSON.parse(content).length}`);

//     viewsProducts++;
// });

// app.get('/item-random', (req, res) => {
//     let content = fs.readFileSync(fileRoute, 'utf-8');
//     let parsed = JSON.parse(content);
//     const randomNum = (min, max) => Math.round(Math.random() * max + min);
//     let randomNumber = randomNum(0, parsed.length - 1);

//     res.send(`Item: ${JSON.stringify(parsed[randomNumber])}`);

//     viewsOneProduct++;
// });

// app.get('/visitas', (req, res) => {
//     res.send(`Visitas: Items: ${viewsProducts} Item: ${viewsOneProduct}`);
// });

import fs from 'fs';
import express from 'express';

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

let viewsProducts = 0;
let viewsOneProduct = 0;
const fileRoute = './files/productos.txt';

app.get('/items', (req, res) => {
    let content = JSON.parse(fs.readFileSync(fileRoute, 'utf-8'));
    viewsProducts++;

    res.send({
        items: content,
        cantidad: content.length,
    });
});

app.get('/item-random', (req, res) => {
    let content = fs.readFileSync(fileRoute, 'utf-8');
    let parsed = JSON.parse(content);
    const randomNum = (min, max) => Math.round(Math.random() * max + min);
    let randomNumber = randomNum(0, parsed.length - 1);
    viewsOneProduct++;

    res.send({ Item: parsed[randomNumber] });
});

app.get('/visitas', (req, res) => {
    res.send({ Visitas: viewsProducts, Item: viewsOneProduct });
});
