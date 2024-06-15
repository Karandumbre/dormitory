import React from "react";
import { STUDENTS } from "../studentsList";
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected;
}

const getValidityDate = (studentName) => {
  const matchedStudent = STUDENTS.find((student) => {
    return student.name.toLowerCase() === studentName.toLowerCase?.();
  });

  return matchedStudent ? matchedStudent.validityDate : "";
};
function Search({ addStudent, setError, validStudentsList }) {
  const [studentName, setStudentName] = React.useState("");
  const [joiningDate, setJoiningDate] = React.useState("");

  const onStudentAdd = () => {
    const validityDate = getValidityDate(studentName);
    if (!validityDate) {
      setError(`Sorry, ${studentName} is not a verified student!`);
      return;
    }
    const isValid = checkValidity(joiningDate, validityDate);
    if (isValid) {
      validStudentsList.find((student) => student.name === studentName)
        ? setError(`Sorry, ${studentName} is already a resident!`)
        : addStudent({
            name: studentName,
            validityDate,
          });

      setStudentName("");
      setJoiningDate("");
      setError("");
    } else {
      setError(`Sorry, ${studentName}'s validity has Expired!`);
      return;
    }
  };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            value={studentName}
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            value={joiningDate}
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            onChange={(e) => setJoiningDate(e.target.value)}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={onStudentAdd}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
