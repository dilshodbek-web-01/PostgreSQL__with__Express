const pool = require("../db/config");

const getCompany = async (req, res) => {
  try {
    let courseList =
      await pool.query(` SELECT c.company_name, company_email, u.user_name, e.title FROM company c 
      JOIN users u ON u.id = c.created_by_user_id
      JOIN emails e ON e.id = u.email_id WHERE u.email_id = '45ee0197-89e7-40a6-a703-13759cf1e035'; `);

    res.status(200).json(courseList.rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCompany,
};
