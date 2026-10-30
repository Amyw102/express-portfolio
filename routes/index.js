/*
  File name  : index.js (routes)
  Student    : Wu Yi
  Student ID : 2024110099
  Date       : 2026-10-29
  Description: Defines one Express route for each page of the portfolio site
               (Home, About, Projects, Services, Contact). The Contact form
               POST handler captures the submitted data and redirects the user
               back to the Home page.
*/

var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Home' });
});

// GET about page
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

// GET projects page
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// GET services page
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services' });
});

// GET contact page
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// POST contact form - capture submitted data then redirect back to Home
router.post('/contact', function (req, res, next) {
  // Capture the form fields submitted by the user
  var firstName = req.body.firstName;
  var lastName  = req.body.lastName;
  var phone     = req.body.phone;
  var email     = req.body.email;
  var message   = req.body.message;

  // Log the captured data to the server console (for demonstration purposes)
  console.log('Contact form received from: ' + firstName + ' ' + lastName);
  console.log('Email: ' + email + ' | Phone: ' + phone);
  console.log('Message: ' + message);

  // Redirect the user back to the Home page
  res.redirect('/');
});

module.exports = router;
