import React from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";

const title = "Dormitory";
function App() {
  const [validStudents, setValidStudents] = React.useState([]);
  const [error, setError] = React.useState("");

  const handleValidStudents = (student) => {
    setValidStudents([...validStudents, student]);
  };

  return (
    <div className="App">
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "20px 0",
        }}
      >
        {title}
      </div>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          addStudent={handleValidStudents}
          setError={setError}
          validStudentsList={validStudents}
        />
        <Error error={error} />
        <ResidentsList validStudents={validStudents} />
      </div>
    </div>
  );
}

export default App;
