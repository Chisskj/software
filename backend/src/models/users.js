const dbConn = require("../helpers/db");
const table = "users";

exports.getUsersById = (id) => {
  return new Promise((resolve, reject) => {
    const query = dbConn.query(
      `SELECT * FROM ${table} WHERE id=${id}`,
      (err, res, field) => {
        if (err) reject(err);
        resolve(res);
      }
    );
    console.log(query.sql);
  });
};

exports.getUsersByCondition = (cond) => {
  return new Promise((resolve, reject) => {
    const query = dbConn.query(
      `SELECT * FROM ${table} WHERE ${Object.keys(cond)
        .map((item) => `${item}="${cond[item]}"`)
        .join(" AND ")}`,
      (err, res, field) => {
        if (err) reject(err);
        resolve(res);
      }
    );
    console.log(query.sql);
  });
};

exports.createUser = (data) => {
  const query = `INSERT INTO ${table} (${Object.keys(data).join()}) VALUES (${Object.values(data).map((item) => `"${item}"`).join(",")})`;
   
  console.log(query);
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO ${table} (${Object.keys(data).join()}) VALUES (${Object.values(data).map((item) => `"${item}"`).join(",")})`;
    dbConn.query(query, (err, res, field) => {
      if (err) {
        reject(err);
      } else {
        console.log(query); // Ghi ra console sau khi truy vấn đã được gọi
        resolve(res);
      }
    });
  });
};


exports.updateUser = (id, data) => {
  return new Promise((resolve, reject) => {
    const key = Object.keys(data);
    const value = Object.values(data);
    dbConn.query(
      `UPDATE ${table}
			SET ${key.map((item, index) => `${item}="${value[index]}"`)}
			WHERE id=${id}`,
      (err, res, field) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};
