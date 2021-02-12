//Hinweis: Mit  dieser Syntax können wir body und validationResultals zugehörige Middleware-Funktionen verwenden, wie Sie im folgenden Abschnitt nach der Route sehen werden. Es ist äquivalent zu:
const { body,validationResult } = require("express-validator");

var Person = require('../models/Person');

// Display list of all Persons.
exports.person_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Person list');
};

// Display detail page for a specific Person.
exports.person_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Person detail: ' + req.params.id);
};
//------------------------------------------------------
//-------------------------------------------------------
//---------------------------------------------------
// Display Person create form on GET.
exports.person_create_get = function(req, res, next) {
    res.render('person_form', { title: 'Create Person'});
};
// Handle Person create on POST.
exports.person_create_post = [

    // Validate and sanitise fields.
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.').isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),

    // Process request after validation and sanitization.
    (req, res, next) => {
        
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('person_form', { title: 'Create Person', person: req.body, errors: errors.array() });
            return;
        }
        else {
            
            // Data from form is valid.

            // Create an Person object with escaped and trimmed data.
            var person = new Person({first_name: req.body.first_name});

            person.save(function (err) {
                //wenn es einen Error gibt, gebe ihn aus
                if (err) { return next(err); }
                // Successful - redirect to new Person record.
                res.redirect('./delete')
                
                //res.redirect(person.url);
            }
            );
        }
    }
];

 /*
 //----- Person create POST not implemented 
// Handle Person create on POST.
exports.person_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Person create POST');
};
*/



//------------------------------------------------------
//-------------------------------------------------------
//---------------------------------------------------

// Display Author delete form on GET.
exports.person_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Person delete GET');
};


// Handle Author delete on POST.
exports.person_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Person delete POST');
};

// Display Author update form on GET.
exports.person_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Person update GET');
};
// Handle Author update on POST.
exports.person_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Person update POST');
};
