const pool = require("../db/config");

const getCars = async (req, res) => {
  try {
    let courseList =
      await pool.query(` SELECT c.car_title, u.user_name, e.title, company_name, company_email FROM cars c 
      JOIN users u ON u.id = c.created_by_user_id
      JOIN emails e ON e.id = u.email_id
      JOIN company ON company.id = c.company_id WHERE c.id = 'ffa9d942-ad39-4e6d-9f6b-6b35290a1264'; `);

    res.status(200).json(courseList.rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCars,
};
