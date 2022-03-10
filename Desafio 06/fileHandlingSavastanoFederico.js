import fs from 'fs';

class Archivo {
    constructor(fileRoute) {
        this.fileRoute = fileRoute; //"productos.txt"
    }

    async leerArchivo() {
        try {
            if (fs.existsSync(this.fileRoute)) {
                let content = await fs.promises.readFile(
                    this.fileRoute,
                    'utf-8'
                );
                let data = await JSON.parse(content);
                return data;
            } else {
                fs.promises.writeFile(
                    this.fileRoute,
                    JSON.stringify('[]', null, '\t')
                );
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    async leer() {
        try {
            let data = await this.leerArchivo();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async guardar(prod) {
        try {
            let content = await this.leerArchivo();
            prod.id = content.length + 1;
            await content.push(prod);
            await fs.promises.writeFile(
                this.fileRoute,
                JSON.stringify(content, null, '\t')
            );
        } catch (error) {
            console.log(error);
        }
    }

    async borrar() {
        try {
            if (fs.existsSync(this.fileRoute)) {
                await fs.promises.unlink(this.fileRoute);
            } else {
                console.log('Ese archivo no existe');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

let arrayDeProds = [
    {
        title: 'Escuadra',
        price: 123.45,
        thumbnail:
            'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
        id: 1,
    },
    {
        title: 'Calculadora',
        price: 234.56,
        thumbnail:
            'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
        id: 2,
    },
    {
        title: 'Globo Terráqueo',
        price: 345.67,
        thumbnail:
            'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
        id: 3,
    },
];

let prodTest = new Archivo('productos.txt');

const guardarProd = async (arrayProds, archivo) => {
    for (let i = 0; i < arrayProds.length; i++) {
        await archivo.guardar(arrayProds[i]);
    }
};

//Ejecutar primero esta linea
guardarProd(arrayDeProds, prodTest);

//Despues estas
// prodTest.leer();
// prodTest.borrar();
