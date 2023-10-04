const pool = require("../db/config");

const getEmails = async (req, res) => {
  try {
    let courseList = await pool.query(` SELECT * FROM emails; `);

    res.status(200).json(courseList.rows);
  } catch (err) {
    console.log(err);
  }
};

const createEmail = async (req, res) => {
  const { title } = req.body;
  let result = await pool.query(
    `INSERT INTO emails(title) 
        VALUES($1)`,[title]
  );

  res.status(201).json({
    msg: "Created!",
  });
};

const deleteEmail = async (req, res) => {
  const { id } = req.params;

  let foundedEmail = await pool.query(` DELETE FROM emails WHERE id = $1`, [
    id,
  ]);

  if (foundedEmail.rowCount === 0)
    return res.status(404).json({ msg: "Email not found!" });

  res.status(200).json({
    msg: "Email deleted!",
  });
};

module.exports = {
  getEmails,
  createEmail,
  deleteEmail
};
