"use strict";

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

initConfig();

const leadEndpoint = require('./app/endpoint/LeadEndpoint');

const app = new Koa();

app.use(bodyParser());

leadEndpoint.routes.forEach((r) => app.use(r));

app.listen(process.env.PORT);

console.log(`Server started at http://localhost:${process.env.PORT}`);

function initConfig() {
    require('dotenv').config({path: require('yargs').argv.envfile});
    process.env.PORT = process.env.PORT || 3000;
}
