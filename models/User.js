const db = require("../util/database");

module.exports = class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  save() {
    return db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [this.name, this.email, this.password]
    );
  }

  static findByEmail(email) {
    return db.execute("SELECT * FROM users WHERE users.email = ?", [email]);
  }

  static updatePassword(password, email) {
    return db.execute(
      "UPDATE users SET password = ? WHERE email = ?", [password, email]
    );
  }
  static deleteById() {}
};
