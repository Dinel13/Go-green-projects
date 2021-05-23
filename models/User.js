const createPool = require("../util/database");

module.exports = class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async save() {
    await createPool()
      .then(async (pool) => {
        const user = await pool.query(
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
          [this.name, this.email, this.password]
        );
        console.log("savve", user);
        return user;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  static async findByEmail(email) {
    const result = await createPool()
      .then(async (pool) => {
        const user = await pool.query("SELECT * FROM users WHERE email = ?", [
          email,
        ]);
        console.log("emai", user[0]);
        return user[0];
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
    return result;
  }

  static async updatePassword(password, email) {
    const result = await createPool()
      .then(async (pool) => {
        const user = await pool.query(
          "UPDATE users SET password = ? WHERE email = ?",
          [password, email]
        );
        console.log("emai", user[0]);
        return user[0];
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    return result;
  }

  static deleteById() {}
};
