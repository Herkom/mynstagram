const path = require('path');

//mover un archivo HTML a otra lugar con ciertas configuraciones
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Crear un modulo con todas las configuraciones
module.exports = {
    entry: './src/index.js', //punto de entrada, archivo principal
    output: { //donde vamos a guardar la info antes de compilarlo o mandarlo a produccion
        path: path.resolve(__dirname, 'dist'), //usamos path para identificarnos en el directorio donde estamos y el nombre de la carpeta que se va a crear
        filename: 'bundle.js', //nombre del archivo compilado
    },
    resolve: {
        extensions: ['*', '.mjs', '.js', '.svelte'], //las extensiones de archivo a resolver
    },
    module: { //reglas y configuraciones del proyecto
        rules: [ // detectar loaders dentro de los proyectos
            {
                test: /\.js?$/, //identificar los archivos con los que se va a trabajar, archivos que terminen en .js
                exclude: /node_modules/, //excluimos esa carpeta
                use: {
                    loader: 'babel-loader' // usamos el tloader de Babel
                }
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader' //nos permite trabajar con svelte
                }
            }
        ]
    },
    plugins: [ //los plugins que vamos a usar
        new HtmlWebpackPlugin({ //configuracion este plugin
            inject:true, //lo vmaos a inyectar
            template: './public/index.html', //el template que va a usar
            filename: './index.html' //el lugar de destino y su nombre de archivo final
        })
    ]
}