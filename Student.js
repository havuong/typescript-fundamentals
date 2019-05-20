"use strict";
exports.__esModule = true;
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
exports["default"] = Students;
// export { Students }
//# sourceMappingURL=Student.js.map