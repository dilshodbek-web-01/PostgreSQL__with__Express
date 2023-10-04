const pool = require("../db/config");

const getCustomers = async (req, res) => {
  try {
    let courseList =
      await pool.query(` SELECT com.company_name, com.company_email, cars.car_title, u.user_name, e.title 
      FROM customers cus 
      JOIN company com ON com.id = cus.company_id
      JOIN cars ON cars.id = cus.car_id
      JOIN users u ON com.created_by_user_id = u.id
      JOIN emails e ON e.id = u.email_id
      JOIN employees emp ON emp.id = cus.created_by_employee_id
      WHERE emp.id = '149fe723-eb35-401b-b681-314fd0dbe077'; `);

    res.status(200).json(courseList.rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    getCustomers,
};
