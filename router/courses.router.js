const { Router } = require("express");
const {
  getCourses,
  getCourseInfo,
  createCourse,
  deleteCourse,
  updateCourse,
} = require("../controller/courses.ctr");

const router = Router();

router.get("/read", getCourses);
router.get("/read/:id", getCourseInfo);
router.post("/create", createCourse);
router.delete("/delete/:id", deleteCourse);
router.put("/update/:id", updateCourse);

module.exports = router;
