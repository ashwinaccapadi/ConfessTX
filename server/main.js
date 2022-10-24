import { Meteor } from 'meteor/meteor';
import { QuestionsCollection } from "/imports/api/QuestionsCollection"



const insertQuestion= collectionText => QuestionsCollection.insert({ text: collectionText});


Meteor.startup(() => {
  if (QuestionsCollection.find().count() === 0) {
    [
      ''
    ].forEach(insertQuestion)
  }
});
