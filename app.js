//Enum declaration
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Japan"] = 1] = "Japan";
    LanguagesKnown[LanguagesKnown["Chinese"] = 2] = "Chinese";
})(LanguagesKnown || (LanguagesKnown = {}));
//Declaring Student
var student = {
    Name: "Anna",
    Age: 30,
    Phone: 08123456,
    Language: LanguagesKnown[LanguagesKnown.Chinese]
};
//List of Students
var studentsList = [
    { Name: "Bobby", Age: 22, Phone: 08345678, Language: LanguagesKnown[LanguagesKnown.English] },
    { Name: "Cameron", Age: 27, Phone: 086789012, Language: LanguagesKnown[LanguagesKnown.Japan] }
];
var studentsListG = [
    { Name: "Bobby", Age: 22, Phone: 08345678, Language: LanguagesKnown[LanguagesKnown.English] },
    { Name: "Cameron", Age: 27, Phone: 086789012, Language: LanguagesKnown[LanguagesKnown.Japan] }
];
//Pushing a student into the array (List of students)
studentsList.push(student);
for (var index = 0; index < studentsList.length; index++) {
    var element = studentsList[index];
    console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" + element.Phone + " knows language:" + element.Language);
}
//Function declaration
function GetStudentsList(students) {
    students.forEach(function (element) {
        console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" + element.Phone + " knows language:" + element.Language);
    });
}
GetStudentsList(studentsList);
//Rest Parameters
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Number: " + element);
    });
}
GetNumbers(1, 2, 3, 4, 5, 6);
//Default Parameters
function GetInfo(info) {
    if (info === void 0) { info = "Happy"; }
    console.log(info);
}
GetInfo("Very happy");
//######## Functions advanced ############
//Anonymous function - Functions which don't have Name/identifiers are considered as Anonymous functions.
//These functions are dynamic and called during runtime
var StudentName = function (lName, fName) {
    return fName + "..." + lName;
};
console.log(StudentName("Anna", "Jackson"));
/* Lambda refers to anonymous functions in programming.
Lambda functions are a concise mechanism to represent anonymous functions.
These functions are also called as Arrow functions. */
var StudentFullName = function (lName, fName) { return fName + ".." + lName; };
console.log(StudentFullName("Bond", "James"));
//**********Classes ************* */
var Students = /** @class */ (function () {
    function Students(lName, fName) {
        this.lName = lName;
        this.fName = fName;
    }
    Students.prototype.GetFullName = function () {
        return this.lName + " " + this.fName;
    };
    return Students;
}());
var s = new Students("CC", "Chloe");
console.log(s.GetFullName());
//# sourceMappingURL=app.js.map