"use strict";

const _ = require("lodash");
const ValidationError = require("../api/ValidationError");

const leadDAO = require("../dao/LeadDAO");

async function create(lead) {
    validate(lead);
    await leadDAO.create(lead);
}

async function list() {
    await leadDAO.list();
}

function validate(lead) {
    if (lead.nome == null) {
        throw new ValidationError("Nome obrigatório");
    }
    if (!(typeof lead.nome === "string")) {
        throw new ValidationError("Nome deve ser texto");
    }
    if (!lead.nome.match(/^[a-zA-Z]+ [a-zA-Z][a-zA-Z ]+$/)) {
        throw new ValidationError("Digite o nome completo");
    }

    if (lead.email == null) {
        throw new ValidationError("Email obrigatório");
    }
    if (!(typeof lead.email === "string")) {
        throw new ValidationError("Email deve ser texto");
    }
    if (!lead.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        throw new ValidationError("Email inválido");
    }

    if (lead.empresa == null) {
        throw new ValidationError("Nome da empresa obrigatório");
    }
    if (!(typeof lead.empresa === "string")) {
        throw new ValidationError("Nome da empresa deve ser texto");
    }
    if (lead.empresa.length <= 1) {
        throw new ValidationError("Digite o nome completo da empresa");
    }

    if (lead.cargo == null) {
        throw new ValidationError("Nome da cargo obrigatório");
    }
    if (!(typeof lead.cargo === "string")) {
        throw new ValidationError("Nome da cargo deve ser texto");
    }
    if (lead.cargo.length <= 1) {
        throw new ValidationError("Digite o nome completo da cargo");
    }
}

module.exports = {
    create,
    list,
};
