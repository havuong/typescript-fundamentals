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