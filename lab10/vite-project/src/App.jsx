import "./App.css";
import React from "react";
function App() {
  const noOfStudents = 8;
  return (
    <>
      {noOfStudents > 10 ? (
        <h1> I have more than 10 students</h1>
      ) : (
        <h1> I have a few Students</h1>
      )}

      {/* <h1>I have a lot of students {noOfStudents} </h1> */}
    </>
  );
}

export default App;
