//need to connect mongoose

const mongoose = require('mongoose');


//Using mongoose model property to create model for Teacher
//Then, specify the schema of the model i.e, define column names
//We have to pass model name 'Teacher' into the model
//For Crud, we will need to use this structure and their names i.e name,position,office etc

var Testimonial = mongoose.model('Testimonial', {
    teacherName: {type: String},
    teacherID: {type: String},
    referenceName: {type: String},
    teacherName: {type: String},
    studentName: {type: String},
    studentID: {type: String},
    studentEmail: {type: String},
    testimonialTitle: { type: String },
    testimonialContent: {type: String},
    testimonialAnswer: {type: String},
    status: {type: String}    
});



//Now we dont to insert a new record called Employee, we need to just insert data
//We export it as an object 

module.exports = { Testimonial };
