-- change password
ALTER USER postgres PASSWORD '1997';

-- show port
SELECT * FROM pg_settings WHERE name = 'port';



-- get one
SELECT * FROM courses WHERE id = '';

-- delete course
DELETE FROM courses WHERE id = $1;

-- UPDATE COURSE
UPDATE courses SET course_title = $1 WHERE id = $2;
