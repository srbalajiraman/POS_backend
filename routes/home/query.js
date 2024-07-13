const setupDb = require("../../db/dbSetup")
const { CreateUserTable } = require("../../db/models")

const getCreateTableUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = setupDb()
            let response = CreateUserTable.query(db)
                .select([
                    "id",
                    "name"
                ])
            let [result] = await Promise.all([
                response
            ])
            resolve({ result })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { getCreateTableUser }
