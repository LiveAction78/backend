"use strict";

const router = require('koa-route');
const leadService = require("../service/LeadService");

module.exports = {
    routes: [
        router.post('/leads',
            async (ctx) => {
                try {
                    await leadService.create(ctx.request.body);
                    ctx.response.status = 201;
                } catch (e) {
                    console.error("erro ao cadastrar lead");
                    console.error(e);
                    console.error("dados: " + JSON.stringify(ctx.request.body));
                    ctx.response.status = 500;
                }
            }
        ),
        router.get('/leads/secret-data',
            async () => {
                return await leadService.list();
            }
        ),
    ],
};
