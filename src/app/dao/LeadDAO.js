"use strict";

const connectionPool = require("../db/ConnectionPool");

async function create(lead) {
    const connection = await connectionPool.getConnection();

    await connection.query({
            sql: 'INSERT INTO db.lead SET ?',
            values: lead
        }
    );
}

async function list() {
    const connection = await connectionPool.getConnection();

    await connection.query({
            sql: 'SELECT * FROM db.lead'
        }
    );
}

module.exports = {
    create,
    list,
};
