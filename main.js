import {nounDeclensionTree} from "./noun.js";
import {verbConjugationTree, infinitives} from "./verb.js";
import {personalPronounTree} from "./pronoun.js";
import {randomKey, randomKeyWithFilter} from "./random.js";
import {loadPage} from "./lib.js";
import {randomNounWithDescription, randomVerbWithDescription, randomVerbWithDescriptionAdvanced, randomPersonalPronounWithDescription, randomVerbFormula} from "./randomWordGenerator.js";

window.onload = function() {
  registerButtons();
  document.getElementById("noun-form").hidden = true;
  document.getElementById("verb-form").hidden = true;
  document.getElementById("pronoun-personal-form").hidden = true;
  document.getElementById("verb-formula-form").hidden = true
};

// *** BUTTONS ***
function registerButtons() {
  document.getElementById("show-nouns").onclick = function() {
    showNouns();
  };

  document.getElementById("random-noun").onclick = function() {
    generateRandomNounBasic();
  };

  document.getElementById("random-verb").onclick = function() {
    generateRandomVerbBasic();
  };

  document.getElementById("random-pronoun-personal").onclick = function() {
    generateRandomPersonalPronounBasic();
  };

  document.getElementById("clear").onclick = function() {
    clearRightSide();
  };
};

function showNouns() {
	const placeholder = document.getElementById("placeholder");
	placeholder.innerHTML = loadPage("nouns-table.html");
  
  clearFormsAndFeedback(); 
};

function generateRandomPersonalPronounBasic() {
  generateRandomWordBasic(randomPersonalPronounWithDescription, "pronoun-personal-form");
};

function generateRandomNounBasic() {
  generateRandomWordBasic(randomNounWithDescription, "noun-form");
};

function generateRandomVerbBasic() {
  generateRandomWordBasic(randomVerbWithDescription, "verb-form");
};

function generateRandomWordBasic(generativeFunction, formId) {
  currentWord = generativeFunction();

  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "Word: " + currentWord.word;

  clearFormsAndFeedback();

  document.getElementById(formId).hidden = false;
};

function clearRightSide() {
  document.getElementById("placeholder");
  placeholder.innerHTML = "";

  clearFormsAndFeedback();
};

function clearFormsAndFeedback() {
  const clearForm = (id) => {
    document.getElementById(id).hidden = true;
    document.getElementById(id).reset();
  } 

  clearForm("noun-form");
  clearForm("verb-form");
  clearForm("pronoun-personal-form");
  clearForm("verb-formula-form");

  document.getElementById("feedback-message").innerHTML = "";
};

let currentWord;
let currentForm;
let randomVerbFormulaFormData;

// *** GENERATIVE FORMS ***
document.getElementById("random-verb-form").onsubmit = function(e) {
  e.preventDefault();

  document.getElementById("feedback-message").innerHTML ="";

  const formData = new FormData(e.target);

  const firstConjugation = formData.get("first-conjugation");
  const secondConjugation = formData.get("second-conjugation");
  const thirdConjugationA = formData.get("third-conjugation-a");
  const thirdConjugationB = formData.get("third-conjugation-b");
  const fourthConjugation = formData.get("fourth-conjugation");

  const indicativeMood = formData.get("mood-indicative");
  const imperativeMood = formData.get("mood-imperative"); 

  const presentTense = formData.get("tense-present");
  const imperfectTense = formData.get("tense-imperfect"); 
  const futureITense = formData.get("tense-futureI"); 
  const perfectTense = formData.get("tense-perfect"); 

  const activeVoice = formData.get("voice-active"); 
  const passiveVoice = formData.get("voice-passive");

  const numberSingularis = formData.get("number-singularis");
  const numberPluralis = formData.get("number-pluralis");

  const firstPerson = formData.get("person-first");
  const secondPerson = formData.get("person-second");
  const thirdPerson = formData.get("person-third");

  const conjugationsIncluded = [firstConjugation, secondConjugation, thirdConjugationA, thirdConjugationB, fourthConjugation].filter(n => n);
  const moodsIncluded = [indicativeMood, imperativeMood].filter(n => n);
  const tensesIncluded = [presentTense, imperfectTense, futureITense, perfectTense].filter(n => n);
  const voicesIncluded = [activeVoice, passiveVoice].filter(n => n);
  const numbersIncluded = [numberSingularis, numberPluralis].filter(n => n);
  const personsIncluded  = [firstPerson, secondPerson, thirdPerson].filter(n => n);

  // console.log("conjugations included: " + conjugationsIncluded);
  // console.log("moods included: " + moodsIncluded);
  // console.log("tenses included: " + tensesIncluded);
  // console.log("voices included: " + voicesIncluded);
  // console.log("numbers included: " + numbersIncluded);
  // console.log("persons included: " + personsIncluded);

  randomVerbAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded);
};

function randomVerbAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded) {
  currentWord = randomVerbWithDescriptionAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded);

  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "Word: " + currentWord.word;

  document.getElementById("verb-form").hidden = false;
  document.getElementById("noun-form").hidden = true;
  document.getElementById("pronoun-personal-form").hidden = true;
  document.getElementById("verb-formula-form").hidden = true;
};

function generateRandomVerbFormulaForm(formData) {
  document.getElementById("feedback-message").innerHTML ="";

  const firstConjugation = formData.get("first-conjugation");
  const secondConjugation = formData.get("second-conjugation");
  const thirdConjugationA = formData.get("third-conjugation-a");
  const thirdConjugationB = formData.get("third-conjugation-b");
  const fourthConjugation = formData.get("fourth-conjugation");

  const indicativeMood = formData.get("mood-indicative");
  const imperativeMood = formData.get("mood-imperative"); 

  const presentTense = formData.get("tense-present");
  const imperfectTense = formData.get("tense-imperfect"); 
  const futureITense = formData.get("tense-futureI"); 
  const perfectTense = formData.get("tense-perfect"); 

  const activeVoice = formData.get("voice-active"); 
  const passiveVoice = formData.get("voice-passive");

  const numberSingularis = formData.get("number-singularis");
  const numberPluralis = formData.get("number-pluralis");

  const firstPerson = formData.get("person-first");
  const secondPerson = formData.get("person-second");
  const thirdPerson = formData.get("person-third");

  const conjugationsIncluded = [firstConjugation, secondConjugation, thirdConjugationA, thirdConjugationB, fourthConjugation].filter(n => n);
  const moodsIncluded = [indicativeMood, imperativeMood].filter(n => n);
  const tensesIncluded = [presentTense, imperfectTense, futureITense, perfectTense].filter(n => n);
  const voicesIncluded = [activeVoice, passiveVoice].filter(n => n);
  const numbersIncluded = [numberSingularis, numberPluralis].filter(n => n);
  const personsIncluded  = [firstPerson, secondPerson, thirdPerson].filter(n => n);

  // console.log("conjugations included: " + conjugationsIncluded);
  // console.log("moods included: " + moodsIncluded);
  // console.log("tenses included: " + tensesIncluded);
  // console.log("voices included: " + voicesIncluded);
  // console.log("numbers included: " + numbersIncluded);
  // console.log("persons included: " + personsIncluded);

  randomVerbFormulaAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded);
};

document.getElementById("random-verb-formula-form").onsubmit = function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  randomVerbFormulaFormData = formData;

  generateRandomVerbFormulaForm(formData);
};

function randomVerbFormulaAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded) {
  // currentWord = randomVerbWithDescriptionAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded);
  currentForm = randomVerbFormula(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded);
  console.log("currentForm word: " + currentForm.word)
  const infinitive = infinitives[currentForm.conjugation];

  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "infinitive: " + infinitive + "<br>" + currentForm.mood + " " + currentForm.tense + " " + currentForm.voice 
  + "<br> " + currentForm.person + " person " + currentForm.number;

  document.getElementById("verb-form").hidden = true;
  document.getElementById("noun-form").hidden = true;
  document.getElementById("pronoun-personal-form").hidden = true;
  document.getElementById("verb-formula-form").hidden = false;
};

// *** GUESSING FORMS ***
document.getElementById("verb-formula-form").onsubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const answer = formData.get("verb-formula-answer");

  console.log("answer: " + answer);

  const feedback = document.getElementById("feedback-message");

  const isCorrect = isCorrectVerbForm(answer, currentForm.word);
  if (isCorrect) {
    generateRandomVerbFormulaForm(randomVerbFormulaFormData);
    feedback.innerHTML ="correct. try new";
    document.getElementById("verb-formula-form-answer").value="";
  } else {
    feedback.innerHTML = "incorrect. given answer: " + answer + "<br>" + 
      "correct answer would be: " + currentForm.word;
  };
};

document.getElementById("noun-form").onsubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const declension = formData.get("declension");
  const gender = formData.get("gender");
  const number = formData.get("number");
  const grammaticalCase = formData.get("case");

  // console.log("declension: " + declension);
  // console.log("gender: " + gender);
  // console.log("number: " + number);
  // console.log("case: " + grammaticalCase);

  const feedback = document.getElementById("feedback-message");

  const isCorrect = isCorrectNoun(declension, gender, number, grammaticalCase, currentWord.word);
  if (isCorrect) {
    feedback.innerHTML = "correct";
  } else {
    feedback.innerHTML = "incorrect. given answer: declension " + declension + " gender " + gender + " number " + number 
      + " case " + grammaticalCase + "<br>" 
      + "correct answer would be: declension " + currentWord.declension + " gender " + 
      currentWord.gender + " number " + currentWord.number + " case " + currentWord.grammaticalCase;
  }
};

document.getElementById("verb-form").onsubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const conjugation = formData.get("conjugation");
  const mood = formData.get("mood");
  const tense = formData.get("tense");
  const voice = formData.get("voice");
  const number = formData.get("number");
  const person = formData.get("person");

  // console.log("conjugation: " + conjugation);
  // console.log("mood: " + mood);
  // console.log("tense: " + tense);
  // console.log("voice: " + voice);
  // console.log("number: " + number);
  // console.log("person: " + person);

  const feedback = document.getElementById("feedback-message");

  const isCorrect = isCorrectVerb(conjugation, mood, tense, voice, number, person, currentWord.word);
  if (isCorrect) {
    feedback.innerHTML ="correct";
  } else {
    feedback.innerHTML = "incorrect. given answer: conjugation " + conjugation + " mood " + mood + " tense " + tense + " voice " 
      + voice + " number " + number + " person " + person + "<br>" + 
      "correct answer would be: conjugation " + currentWord.conjugation + " mood " + currentWord.mood + " tense " 
      + currentWord.tense + " voice " + currentWord.voice + " number " + currentWord.number + " person " + currentWord.person;
  }
};

document.getElementById("pronoun-personal-form").onsubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const number = formData.get("number");
  const person = formData.get("person");
  const grammaticalCase = formData.get("case");

  // console.log("number: " + number);
  // console.log("person: " + person);
  // console.log("case: " + grammaticalCase);

  const feedback = document.getElementById("feedback-message");

  const isCorrect = isCorrectPronoun(number, person, grammaticalCase, currentWord.word);
  if (isCorrect) {
    feedback.innerHTML ="correct";
  } else {
    feedback.innerHTML = "incorrect. given answer: number " + number + " person " + person + " case " + grammaticalCase + "<br>" +
      "correct answer would be: number " + currentWord.conjugation + " person " + currentWord.person + " case " + currentWord.grammaticalCase;
  }
};

// *** FEEDBACK ***
function isCorrectVerbForm(answer, correctWord) {
  return answer === currentForm.word;
};

function isCorrectNoun(declension, gender, number, grammaticalCase, correctWord) {
  // some declensions doesn't have every genders. warning: possible to lose sight of some errors here
  return nounDeclensionTree[declension][gender] !== undefined 
    && nounDeclensionTree[declension][gender][number][grammaticalCase] === correctWord
};

function isCorrectVerb(conjugation, mood, tense, voice, number, person, correctWord) {
  return verbConjugationTree[conjugation][mood][tense][voice][number][person] === correctWord
};

function isCorrectPronoun(number, person, grammaticalCase, correctWord) {
  return personalPronounTree[number][person][grammaticalCase] === correctWord;
};
