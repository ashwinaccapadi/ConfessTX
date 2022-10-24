import React, { useState } from 'react';
import { QuestionsCollection } from '/imports/api/QuestionsCollection';

export const QuestionForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    QuestionsCollection.insert({
      text: text.trim(),
      createdAt: new Date(),
    });

    setText("");
  };
 
  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type Your Confession"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Let it out...</button>
    </form>
  );
};