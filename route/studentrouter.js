// Establishing express router
const router = require('express').Router();
// Importing model Student
const Student = require('../model/student');

// post (WORKS) add students
router.post('/add_student', (req, res) => {
    const { id, name, section, gpa, nationality } = req.body;
  
    Student.create({
      id: id,
      name: name,
      section: section,
      gpa: gpa,
      nationality: nationality
    })
      .then((student) => {
        res.status(201).json(student);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error adding student');
      });
  });

// Get (WORKS) retrieve students
router.get('/get_student',(req, res) => {
    Student.findAll().then((student) =>{
        return res.status(200).send(student);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Error adding student');
      });
});

// Get by ID (WORKS)
router.get('/get_student/:id',(req, res) => {
    Student.findAll({where: {id: req.params.id} }).
    then((student) =>{
        if (student.length ==0) {
            return res.status(404).send('No Record');
        }
        return res.status(200).send(student);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Error adding student');
      });
    });

// Get by section (WORKS)
router.get('/get_student/section/:section', (req, res) => {
    const section = req.params.section;
  
    Student.findAll({ where: { section: section } })
      .then((students) => {
        if (students.length === 0) {
          return res.status(404).send('No Record');
        }
        return res.status(200).send(students);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error fetching students');
      });
  });
  


// PATCH ID (WORKS)
router.patch('/get_student/update/:id', (req, res) => {
    Student.findByPk(parseInt(req.body.id)).then((student) => {
      if (student) {
        for (let i in req.body) {
          student[i] = req.body[i];
        }
        student.save().then((student) => {
          res.status(200).send(student);
        });
      } else {
        return res.status(404).send('No Student Found');
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error fetching students');
    });
  });
  

// PUT ID  *** I guess it's not needed but I can't get it to work. ***


// router.put('/students/change/:id', (req, res) => {
//   Student.findByPk(parseInt(req.body.id))
//     .then((student) => {
//       if (student) {
//         student.id = req.body.id;
//         student.name = req.body.name;
//         student.section = req.body.section;
//         student.gpa = req.body.gpa;
//         student.nationality = req.body.nationality;
            
//         student.save().then((student) => {
//             res.status(200).send(student);
//           });
//         } else {
//           return res.status(404).send('No Student Found');
//         }
//       }).catch((error) => {
//         console.error(error);
//         res.status(500).send('Error fetching students');
//       });
//     });

          
// Delete (WORKS)
router.delete('/deletes/:id', (req, res) =>{
    Student.findByPk(parseInt(req.params.id)).then((student) =>{
        if(student) {
        student.destroy().then((result) => {
            return res.status(200).send(student)
        })
    } else {
        return res.status(404).send('No student Found with that ID')
    }
}).catch((error) => {
    res.status(500).send('Error deleting')
})
});




module.exports = router;
