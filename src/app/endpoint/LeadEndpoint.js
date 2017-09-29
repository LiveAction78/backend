"use strict";

const router = require('koa-route');
const leadService = require("../service/LeadService");

module.exports = {
    routes: [
        router.post('/leads',
            async (ctx) => {
                try {
                    console.log("ctx.request.header['x-appengine-user-ip'] - " + ctx.request.header['x-appengine-user-ip']);

                    console.log("ctx.request.header['X-Forwarded-For'] - " + ctx.request.header["X-Forwarded-For"]);
                    console.log("ctx.request.header['Proxy-Client-IP'] - " + ctx.request.header["Proxy-Client-IP"]);
                    console.log("ctx.request.header['WL-Proxy-Client-IP'] - " + ctx.request.header["WL-Proxy-Client-IP"]);
                    console.log("ctx.request.header['HTTP_X_FORWARDED_FOR'] - " + ctx.request.header["HTTP_X_FORWARDED_FOR"]);
                    console.log("ctx.request.header['HTTP_X_FORWARDED'] - " + ctx.request.header["HTTP_X_FORWARDED"]);
                    console.log("ctx.request.header['HTTP_X_CLUSTER_CLIENT_IP'] - " + ctx.request.header["HTTP_X_CLUSTER_CLIENT_IP"]);
                    console.log("ctx.request.header['HTTP_CLIENT_IP'] - " + ctx.request.header["HTTP_CLIENT_IP"]);
                    console.log("ctx.request.header['HTTP_FORWARDED_FOR'] - " + ctx.request.header["HTTP_FORWARDED_FOR"]);
                    console.log("ctx.request.header['HTTP_FORWARDED'] - " + ctx.request.header["HTTP_FORWARDED"]);
                    console.log("ctx.request.header['HTTP_VIA'] - " + ctx.request.header["HTTP_VIA"]);
                    console.log("ctx.request.header['REMOTE_ADDR'] - " + ctx.request.header["REMOTE_ADDR"]);
                    console.log("ctx.request.header - " + JSON.stringify(ctx.request.header));
                    console.log("ctx.request.headers - " + JSON.stringify(ctx.request.headers));
                    console.log("ctx.request.ip - " + ctx.request.ip);
                    await leadService.create(ctx.request.body);
                    ctx.response.status = 201;
                } catch (e) {
                    if (e.constructor.name === "ValidationError") {
                        ctx.response.body = {
                            error: e.message
                        };
                        ctx.response.status = 422;
                    } else {
                        console.error("erro ao cadastrar lead");
                        console.error(e);
                        console.error("dados: " + JSON.stringify(ctx.request.body));
                        ctx.response.status = 500;
                    }
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
