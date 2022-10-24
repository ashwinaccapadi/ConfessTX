import React from 'react';
import { Hello } from './Hello.jsx';
import { Question } from './Question.jsx';
import { useTracker } from 'meteor/react-meteor-data';
import { QuestionsCollection } from '/imports/api/QuestionsCollection';
import { QuestionForm } from './QuestionForm.jsx';

// const questions = [
//   {_id: 1, title: 'Where do I study?', text: 'ive been studying at the EER but looking for other places'},
//   {_id: 2, title: 'Is it easy to transfer', text:'I want to transfer but not sure how to'},
//   {_id: 3, title: 'Dining Hall Food', text: 'Ive been eating at JCL and want to go to Kins, Y Or N'},
// ];


export const App = () => {
  

  const questions = useTracker(() => QuestionsCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  return(
  
  <div className = "app" style={{ 
    backgroundColor: 'white'}}>
       <div className="app-bar">
          <div className="app-header">
          </div>
        </div>
      <br></br> 
      <img src="https://i.ibb.co/5ntKGTg/confesstx-logo.png" width="170" style={{position:'relative', left:'32%'}}></img>
      <br></br>
      <QuestionForm/>
    <div style={{}}>
      { questions.map(questions => <Question key={ questions._id } question={ questions }/>)}
      
      </div>
  </div>
  )
  };
