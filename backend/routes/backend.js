
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
var app = express();

var express = require('express');
var router = express.Router();
var db = require('../models');
var PORT = process.env.PORT || '5000';


router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login_auth'
})

connection.connect()
connection.end()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


const jwtMW = exjwt({
  secret: 'super secret'
});


router.post('/add', (req, res) => {
  db.userDetails.findOne({
    where: {
        email: req.body.data.email
    }
}).then(function(user) {
  if (!user) {
    fname = req.body.data.firstname;
    lname = req.body.data.lastname;
    mno=req.body.data.mobilenumber;
    email = req.body.data.email;
    password = req.body.data.password;
    radio=req.body.data.selectedValue;
    //category= req.body.data.category;
console.log(req.body.data);
//cconsole.log(req.data);


    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {
      db.userDetails.create({
        firstname:fname,
        lastname:lname,
        mobilenumber:mno,
        email:email,
        password:hash,
        category:radio,
        
      }).then((result) => {
        console.log("User created: ", result);
        res.json("registration successful...");     
      })
    });
  }
})
})


router.get('/gigs', (req, res) => {
  db.userDetails.findAll().then((result) => {
    console.log("User created: ", result);
    res.json({
      status: 'success',
      data: result,
    })  
      })
    })




  router.post('/profile', (req, res) => {

    
    skills = req.body.data.skills;
    qualification = req.body.data.qualification;
    experience=req.body.data.experience;
    location = req.body.data.location;

    //const saltRounds = 10;
    // bcrypt.hash(location, saltRounds, function (err, hash) {
      db.userDetails.create({
        skills:skills,
        qualification:qualification,
        experience:experience,
        location:location,
       
        
      }).then((result) => {
        console.log("profile created: ", result);
        res.json("profile updated!");
        
        
      // })
    });

    });

  //   router.get('/gigs', function(req, res, next) {
  //     db.query('select * from gigs_post', function (error, results, fields) {
  //         if(error) throw error;
  //         res.send(JSON.stringify(results));
  //     });
  // });
    

  router.get('/select', function (req, res, next) {

    connection.query('SELECT * from gigs_post ', function (err, rows, fields) {
      if (!err)
        res.json({
          status: 'success',
          data: rows,
        })

      else
        res.json([{
          status: 'failed',
          errMsg: 'Error while performing query.'
        }])
    });
  
  });

// se
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("User submitted: ", email, password);

  db.userDetails.findOne(
    {
      where: { email: email }
    })
    .then((user) => {
      console.log("User Found: ", user);
      if (user === null) {
        res.status(401).json({
          sucess: false,
          token: null,
          err: 'Invalid Credentials'
        });
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          console.log("Valid!");

          let token = jwt.sign(
            {
              email: user.email
            },
            'super secret',
            { expiresIn: 129600 }); // Signing the token

          res.json({
            sucess: true,
            err: null,
            token
          });
        }
        else {
          console.log("Entered Password and Hash do not match!");
          res.status(401).json({
            sucess: false,
            token: null,
            err: 'Entered Password and Hash do not match!'
          });
        }
      });
    })
});

router.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
  console.log("Web Token Checked........jwt response");
  res.send('You are authenticated........response'); //Sending some response when authenticated
});

db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
})
module.exports = router;