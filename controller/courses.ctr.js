const pool = require("../db/config");

const getCourses = async (req, res) => {
  try {
    let courses = await pool.query(` SELECT * FROM courses `);

    res.status(200).json(courses.rows);
  } catch (err) {
    console.log(err);
  }
};

const getCourseInfo = async (req, res) => {
  const { id } = req.params;
  try {
    let courseList = await pool.query(
      ` SELECT c.title, u.user_name, e.title, t.teacher_name, t.teacher_surname FROM courses c JOIN users u ON u.id = c.created_by_user_id 
      JOIN emails e ON e.id = u.email_id JOIN teachers t ON t.created_by_user_id = u.id
      WHERE u.id = $1 `,
      [id]
    );

    res.status(200).json(courseList.rows);
  } catch (err) {
    console.log(err);
  }
};

const createCourse = async (req, res) => {
  const { title, price, course_description, created_by_user_id } = req.body;
  let result = await pool.query(
    `INSERT INTO courses(title, price, course_description, created_by_user_id)
    VALUES($1, $2, $3, $4)`,
    [title, price, course_description, created_by_user_id]
  );

  res.status(201).json({
    msg: "New course created!",
  });
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  let foundedCourse = await pool.query(` DELETE FROM courses WHERE id = $1`, [id]);

  if (foundedCourse.rowCount === 0)
    return res.status(404).json({ msg: "Course not found!" });

  res.status(200).json({
    msg: "Course deleted!",
  });
};

const updateCourse = async (req, res) => {
  const { id } = req.params;
  let { title, price, course_description, created_by_user_id } = req.body;

  let foundedCourse = await pool.query(` SELECT * FROM courses WHERE id = $1`, [
    id,
  ]);

  if (foundedCourse.rowCount === 0)
    return res.status(404).json({ msg: "Course not found!" });

  const { 
      title: old_title,
      price: old_price,
      course_description: old_course_desc,
      created_by_user_id: old_created_by_user_id      
      } = foundedCourse.rows[0];

  title = title ? title : old_title,
  price = price ? price : old_price,
  course_description = course_description ? course_description : old_course_desc,
  created_by_user_id = created_by_user_id ? created_by_user_id : old_created_by_user_id;


  let updatedCourse = await pool.query(
    ` 
      UPDATE courses SET 
          title = $1,
          price = $2,
          course_description = $3,
          created_by_user_id = $4
           WHERE id = $5`,
    [title, price, course_description, created_by_user_id, id]
  );

  res.status(200).json({
    msg: "Course Updated!",
  });
};

module.exports = {
  getCourses,
  getCourseInfo,
  createCourse,
  deleteCourse,
  updateCourse
};
