const { Model } = require("objection")

class CreateUserTable extends Model {
    static get tableName() {
        return "create_user_table"
    }
}

module.exports = CreateUserTable