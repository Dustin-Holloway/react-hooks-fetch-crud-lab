import React, { useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, updateItemList }) {
  function onDeleteItem(itemToDelete) {
    updateItemList(itemToDelete);
  }

  const questionsList = questions.map((listItem) => (
    <QuestionItem
      question={listItem}
      key={listItem.id}
      onDeleteItem={onDeleteItem}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsList}</ul>
    </section>
  );
}

export default QuestionList;
