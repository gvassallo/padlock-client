'use strict'; 

var express = require('express'); 
var path = require('path'); 

var router = express.Router(); 

// TODO change this 
router.route('/js/app.js')
        .get((req, res) => {
        res.sendFile(path.join(__dirname, "../dist/js/bundle.js"));             
        }); 
router.route('/css/index.css')
        .get((req, res) => {
        res.sendFile(path.join(__dirname, "../dist/css/index.css"));             
        }); 
router.route('/img/*')
        .get((req, res) => {
        res.sendFile(path.join(__dirname, "../dist/", req.originalUrl));             
        }); 
router.use('/fonts', 
          express.static(path.join(__dirname, "../node_modules/font-awesome/fonts"))); 
router.route('/*') 
        .get((req, res) => {
        res.sendFile(path.join(__dirname, "../index.html"));
        }); 
// router.route('/register')
//         .get((req, res) => {
//         res.sendFile(path.join(__dirname, "../index.html"));
//         }); 
//
// router.route('/login')
//         .get((req, res) => {
//         res.sendFile(path.join(__dirname, "../index.html"));
//         }); 
// router.route('/profile')
//         .get((req, res) => {
//         res.sendFile(path.join(__dirname, "../index.html"));
//         }); 
// router.route('/g#<{(|')
//         .get((req, res) => {
//         res.sendFile(path.join(__dirname, "../index.html"));
//         }); 
//
// // router.route('/')
// //         .get((req, res) => {
// //         res.sendFile(path.join(__dirname, "../../client/index.html"));
// //         }); 
module.exports = router; 
