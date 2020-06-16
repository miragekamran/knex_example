const knex = require("knex");

// Not best practice
const config = {
    client: "sqlite3",
    connection: {
        filename: "./data/users.db3"
    },
    useNullAsDefault: true
};

const db = knex(config);

module.exports = db;