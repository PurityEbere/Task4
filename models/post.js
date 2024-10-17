const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/blog.db');

const getAllPosts = (callback) => {
  const sql = 'SELECT * FROM posts';
  db.all(sql, [], (err, rows) => {
    if (err) return callback(err);
    return callback(null, rows);
  });
};

const getPostById = (id, callback) => {
  const sql = 'SELECT * FROM posts WHERE id = ?';
  db.get(sql, [id], (err, row) => {
    if (err) return callback(err);
    return callback(null, row);
  });
};

const createPost = (title, content, callback) => {
  const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
  db.run(sql, [title, content], function (err) {
    if (err) return callback(err);
    return callback(null, { id: this.lastID, title, content });
  });
};

const checkIfTableExist = () => {
  const sql = 'SELECT id from Table posts';
  const runcommand = b.run(sql)
  if (!runcommand) {
    return false;
  }
  return true
}

const createPostTable = () => {
  const tableExist = checkIfTableExist();
  if (tableExist) {
    return true
  } else {

    const sql = 'CREATE TABLE posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title varchar(250), content varchar(250))';
    const runcommand = b.run(sql)
    if (!runcommand) {
      return false;
    }
    return true
  }

}
module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  createPostTable
};
