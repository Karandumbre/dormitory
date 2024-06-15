import React from "react";

function ResidentsList({ validStudents }) {
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {validStudents?.length &&
          validStudents.map((student, index) => (
            <li key={`item${index + 1}`} className="slide-up-fade-in">
              {student.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ResidentsList;
