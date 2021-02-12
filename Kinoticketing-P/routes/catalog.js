var express = require('express');
var router = express.Router();


// Require controller modules.

var person_controller = require('../controller/personController');


/// PERSON ROUTES ///as

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).

router.get('/person/create', person_controller.person_create_get);


// POST request for creating Author.
router.post('/person/create', function(req,res){
    person_controller.person_create_post
});


// GET request to delete Author.
router.get('/person/:id/delete', person_controller.person_delete_get);

// POST request to delete Author.
router.post('/person/:id/delete', person_controller.person_delete_post);

// GET request to update Author.
router.get('/person/:id/update', person_controller.person_update_get);

// POST request to update Author.
router.post('/person/:id/update', person_controller.person_update_post);

// GET request for one Author.
router.get('/person/:id', person_controller.person_detail);

// GET request for list of all Authors.
router.get('/persons', person_controller.person_list);

//Das Modul benötigt Express und erstellt damit ein RouterObjekt. Die Routen werden alle auf dem Router eingerichtet, der dann exportiert wird.
module.exports = router;
