import {declensionTree} from "./declension.js"
import {conjugationTree} from "./conjugation.js"

window.onload = function() {
  registerButtons();
  document.getElementById("noun-form").hidden = true;
  document.getElementById("verb-form").hidden = true;
};

// *** BUTTONS ***
function registerButtons() {
  document.getElementById("show-nouns").onclick = function() {
    showNouns();
  };

  document.getElementById("random-noun").onclick = function() {
    randomNoun();
  };

  document.getElementById("random-verb").onclick = function() {
    randomVerb();
  };

  document.getElementById("clear").onclick = function() {
    clear();
  };
};

function showNouns() {
	const placeholder = document.getElementById("placeholder");
	placeholder.innerHTML = loadPage("nouns-table.html");
  
  const nounForm = document.getElementById("noun-form");
  nounForm.hidden = true;
  nounForm.reset();

  const verbForm = document.getElementById("verb-form");
  verbForm.hidden = true;
  verbForm.reset()

  document.getElementById("feedback-message").innerHTML = "";
};

function randomNoun() {
  currentWord = randomNounWithDescription();

  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "Word: " + currentWord.word;

  document.getElementById("noun-form").hidden = false;
  document.getElementById("verb-form").hidden = true;

  document.getElementById("feedback-message").innerHTML = "";
};

function randomVerb() {
  currentWord = randomVerbWithDescription();

  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "Word: " + currentWord.word;

  document.getElementById("verb-form").hidden = false;
  document.getElementById("noun-form").hidden = true;

  document.getElementById("feedback-message").innerHTML = "";
};

function clear() {
  document.getElementById("placeholder");
  placeholder.innerHTML =  "";

  const nounForm = document.getElementById("noun-form");
  nounForm.hidden = true;
  nounForm.reset();

  const verbForm = document.getElementById("verb-form");
  verbForm.hidden = true;
  verbForm.reset()

  document.getElementById("feedback-message").innerHTML = "";
};

function loadPage(href){
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
};

let currentWord;

function randomKey(obj) {
    const keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0 ];
};

function randomKeyWithFilter(obj, allowableValues) {
  const keys = Object.keys(obj).filter(value => -1 !== allowableValues.indexOf(value));
  return keys[ keys.length * Math.random() << 0 ];
};

function randomNounWithDescription() {
  const res = {};

  res.declension = randomKey(declensionTree);
  res.gender = randomKey(declensionTree[res.declension]);
  res.number = randomKey(declensionTree[res.declension][res.gender]);
  res.grammaticalCase = randomKey(declensionTree[res.declension][res.gender][res.number]);
  res.word = declensionTree[res.declension][res.gender][res.number][res.grammaticalCase];

  return res;
};

function randomVerbWithDescription() {
  const res = {};

  res.conjugation = randomKey(conjugationTree);
  res.mood = randomKey(conjugationTree[res.conjugation]);
  res.tense = randomKey(conjugationTree[res.conjugation][res.mood]);
  res.voice = randomKey(conjugationTree[res.conjugation][res.mood][res.tense]);
  res.number = randomKey(conjugationTree[res.conjugation][res.mood][res.tense][res.voice]);
  res.person = randomKey(conjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number]);
  res.word = conjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number][res.person];

  return res;
};

function randomVerbAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded) {
  currentWord = randomVerbWithDescriptionAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded);

  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "Word: " + currentWord.word;

  document.getElementById("verb-form").hidden = false;
  document.getElementById("noun-form").hidden = true;
};

function randomVerbWithDescriptionAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded) {
  const res = {};
  
  res.conjugation = randomKeyWithFilter(conjugationTree, conjugationsIncluded);
  res.mood = randomKeyWithFilter(conjugationTree[res.conjugation], moodsIncluded);
  res.tense = randomKeyWithFilter(conjugationTree[res.conjugation][res.mood], tensesIncluded);
  res.voice = randomKeyWithFilter(conjugationTree[res.conjugation][res.mood][res.tense], voicesIncluded);
  res.number = randomKeyWithFilter(conjugationTree[res.conjugation][res.mood][res.tense][res.voice], numbersIncluded);
  res.person = randomKeyWithFilter(conjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number], personsIncluded);
  res.word = conjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number][res.person];

  return res;
};

// *** GENERATIVE FORMS ***
document.getElementById('random-verb-form').onsubmit = function(e) {
  e.preventDefault();

  document.getElementById("feedback-message").innerHTML ="";

  const formData = new FormData(e.target);

  const firstConjugation = formData.get("first-conjugation");
  const secondConjugation = formData.get("second-conjugation");
  const thirdConjugation = formData.get("third-conjugation");
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

  const conjugationsIncluded = [firstConjugation, secondConjugation, thirdConjugation, fourthConjugation].filter(n => n);
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

// *** GUESSING FORMS ***
document.getElementById('noun-form').onsubmit = function(e) {
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

  const isCorrect = isCorrectNoun(declension, gender, number, grammaticalCase);
  if (isCorrect) {
    feedback.innerHTML = "correct";
  } else {
    feedback.innerHTML = "incorrect. given answer: declension " + declension + " gender " + gender + " number " + number 
      + " case " + grammaticalCase + "<br>" 
      + "correct answer would be: declension " + currentWord.declension + " gender " + 
      currentWord.gender + " number " + currentWord.number + " case " + currentWord.grammaticalCase;
  }
};

document.getElementById('verb-form').onsubmit = function(e) {
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

  const isCorrect = isCorrectVerb(conjugation, mood, tense, voice, number, person);
  if (isCorrect) {
    feedback.innerHTML ="correct";
  } else {
    feedback.innerHTML = "incorrect. given answer: conjugation " + conjugation + " mood " + mood + " tense " + tense + " voice " 
      + voice + " number " + number + " person " + person + "<br>" + 
      "correct answer would be: conjugation " + currentWord.conjugation + " mood " + currentWord.mood + " tense " 
      + currentWord.tense + " voice " + currentWord.voice + " number " + currentWord.number + " person " + currentWord.person;
  }
};

// *** FEEDBACK ***
function isCorrectNoun(declension, gender, number, grammaticalCase) {
  // some declensions doesn't have every genders. warning: possible to lose sight of some errors here
  return declensionTree[declension][gender] !== undefined 
    && declensionTree[declension][gender][number][grammaticalCase] === currentWord.word
};

function isCorrectVerb(conjugation, mood, tense, voice, number, person) {
  return conjugationTree[conjugation][mood][tense][voice][number][person] === currentWord.word
};
