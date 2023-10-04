const pool = require("../db/config");

const getFruits = async (req, res) => {
  try {
    let courseList =
      await pool.query(` SELECT u.user_name, e.title FROM fruits f 
        JOIN users u ON u.id = f.created_by_user_id 
        JOIN emails e ON e.id = u.email_id WHERE u.id = 'c51f1af0-a6ff-4028-a6b7-f26b045c87ba'; `);

    res.status(200).json(courseList.rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getFruits,
};
