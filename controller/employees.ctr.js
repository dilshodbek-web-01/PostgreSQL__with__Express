const pool = require("../db/config");

const getEmployees = async (req, res) => {
  try {
    let courseList =
      await pool.query(` SELECT u.user_name, emails.title, c.company_name, c.company_email FROM employees e 
      JOIN users u ON u.id = e.created_by_user_id
      JOIN emails ON emails.id = u.email_id
      JOIN company c ON c.id = e.company_id WHERE e.id = '149fe723-eb35-401b-b681-314fd0dbe077'; `);

    res.status(200).json(courseList.rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    getEmployees,
};
