const db = require("mysql");
const dbconnInfo = require("../dbconfig");
const pool = db.createPool(dbconnInfo);

DBObj = {
  query: (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
            connection.release();
          });
        }
      });
    });
  },
};

module.exports = DBObj;
