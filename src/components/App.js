import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestionList(data));
  }, []);

  const onNewQuestion = (newData) => {
    setQuestionList([...questionList, newData]);
    console.log(...questionList, newData);
  };

  function itemToDelete(thing) {
    const updatedItems = questionList.filter((item) => item.id !== thing.id);
    setQuestionList(updatedItems);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm newQuestion={onNewQuestion} />
      ) : (
        <QuestionList questions={questionList} updateItemList={itemToDelete} />
      )}
    </main>
  );
}

export default App;
