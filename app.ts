//Enum declaration
enum LanguagesKnown { English, Japan, Chinese}

//Declaring Student
let student = {
    Name: "Anna",
    Age: 30,
    Phone: 08123456,
    Language: LanguagesKnown[LanguagesKnown.Chinese]
}

//List of Students
let studentsList = [
    {Name: "Bobby", Age:22, Phone:08345678, Language: LanguagesKnown[LanguagesKnown.English]},
    {Name: "Cameron",Age:27, Phone:086789012, Language: LanguagesKnown[LanguagesKnown.Japan]}
]

//Pushing a student into the array (List of students)
studentsList.push(student);

for (var index = 0; index < studentsList.length; index++) {
    var element = studentsList[index];
    console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" +element.Phone + " knows language:"+ element.Language );
}

//Function declaration
function GetStudentsList(students: any[]){
    students.forEach(element => {
            console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" +element.Phone + " knows language:"+ element.Language );
    });
}

GetStudentsList(studentsList);

//Rest Parameters
function GetNumbers(...nums: number[]){
    nums.forEach(element => {
        console.log("Number: " + element);
    });
}

GetNumbers(1,2,3,4,5,6)

//Default Parameters
function GetInfo(info:string = "Happy"){
    console.log(info);
}

GetInfo("Very happy");

//######## Functions advanced ############

//Anonymous function - Functions which don't have Name/identifiers are considered as Anonymous functions.
//These functions are dynamic and called during runtime

let StudentName = function (lName:string, fName:string){
    return fName + "..." + lName;
}

console.log(StudentName("Anna", "Jackson"));

/* Lambda refers to anonymous functions in programming.
Lambda functions are a concise mechanism to represent anonymous functions.
These functions are also called as Arrow functions. */

let StudentFullName = (lName:string, fName:string) => {return fName + ".." + lName};

console.log(StudentFullName("Bond", "James"));
