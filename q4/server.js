const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/StudentDB", //Class is the name of the database
    { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Connection Successful!")
});

const studSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dob: Date,
    yoa: Number
});

const Student = mongoose.model("Student", studSchema);//students is the name of the collection in the database class

//part 1
const Yash = new Student({
    name: "Yash Jasani",
    age: 19,
    dob: "2002-09-13",
    yoa: 2020
});
const Atharva = new Student({
    name: "Atharva Shinde",
    age: 19,
    dob: "2002-06-25",
    yoa: 2020
});
const Kevin = new Student({
    name: "Kevin",
    age: 21,
    dob: "1996-03-02",
    yoa: 2018
});
const Swati = new Student({
    name: "Swati Jasani",
    age: 45,
    dob: "1976-05-17",
    yoa: 2017
});

// ---------end of part 1-----------

// part 2
// Student.insertMany([Yash, Atharva, Kevin, Swati], function (err) {
//     if (err) {
//         console.log("start")
//         console.log(err);
//         console.log("end");
//     } else {
//         console.log("Successful");
//     }
// });

// ---------end of part 2-----------

// part 3
Student.find({}, function (err, sorted) {
    if (err) {
        console.log(err);
    } else {
        console.log(sorted)
        console.log("---------------------end of part 3-----------------------")
    }
}).sort({ name: 1 });

// part 4
Student.updateOne({ name: "Kevin" }, { age: "25" }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("updated");
    }
});

Student.find({}, function (err, find) {
    if (err) {
        console.log(err);
    } else {
        console.log(find)
        console.log("---------------------end of part 4-----------------------")
    }
});

// part 5
Student.find({}, function (err, find4) {
    if (err) {
        console.log(err);
    } else {
        console.log(find4)
        console.log("---------------------end of part 5-----------------------")
    }
}).limit(4);

// part 6
Student.findOne({ age: { $gt: 25 } }, function (err, age_above_25) {
    if (err) {
        console.log(err);
    } else {
        console.log(age_above_25);
        console.log("---------------------end of part 6-----------------------")
    }
})