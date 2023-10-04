const pool = require("../db/config");

const getUsers = async (req, res) => {
  try {
    let users = await pool.query(` SELECT * FROM users `);

    res.status(200).json(users.rows);
  } catch (err) {
    console.log(err);
  }
};

const getUserInfo = async (req, res) => {
  const { id } = req.params;

  try {
    let users = await pool.query(
      ` SELECT e.title FROM users u JOIN emails e ON e.id = u.email_id 
        WHERE u.id = $1`,
      [id]
    );

    res.status(200).json(users.rows);
  } catch (err) {
    console.log(err);
  }
};

const getOneUser = async (req, res) => {
  const { id } = req.params;

  let foundedUser = await pool.query(` SELECT * FROM users WHERE id = $1`, [
    id,
  ]);

  if (foundedUser.rows == [] || foundedUser.rows.length === 0)
    return res.status(404).json({ msg: "User not found!" });

  res.status(200).json(foundedUser.rows);
};

const createUser = async (req, res) => {
  const { user_name, email_id } = req.body;
  let result = await pool.query(
    `INSERT INTO users(user_name, email_id) VALUES($1, $2)`,
    [user_name, email_id]
  );

  res.status(201).json({
    msg: "New user created!",
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  let foundedUser = await pool.query(` DELETE FROM users WHERE id = $1`, [id]);

  if (foundedUser.rowCount === 0)
    return res.status(404).json({ msg: "User not found!" });

  res.status(200).json({
    msg: "User deleted!",
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  let { user_name } = req.body;

  let foundedUser = await pool.query(` SELECT * FROM users WHERE id = $1`, [
    id,
  ]);

  if (foundedUser.rowCount === 0)
    return res.status(404).json({ msg: "User not found!" });

  const { user_name: oldUsername } = foundedUser.rows[0];

  user_name = user_name ? user_name : oldUsername;

  let updatedUser = await pool.query(
    ` 
      UPDATE users SET user_name = $1 WHERE id = $2`,
    [user_name, id]
  );

  res.status(200).json({
    msg: "User Updated!",
  });
};

module.exports = {
  getUsers,
  getUserInfo,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
};
