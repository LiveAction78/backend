"use strict";

const leadDAO = require("../dao/LeadDAO");

async function create(lead) {
    await leadDAO.create(lead);
}

async function list() {
    await leadDAO.list();
}

module.exports = {
    create,
    list,
};
