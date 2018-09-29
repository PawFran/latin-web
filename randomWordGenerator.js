import {declensionTree} from "./declension.js";
import {conjugationTree} from "./conjugation.js";
import {randomKey, randomKeyWithFilter} from "./random.js";

export function randomNounWithDescription() {
  const res = {};

  res.declension = randomKey(declensionTree);
  res.gender = randomKey(declensionTree[res.declension]);
  res.number = randomKey(declensionTree[res.declension][res.gender]);
  res.grammaticalCase = randomKey(declensionTree[res.declension][res.gender][res.number]);
  res.word = declensionTree[res.declension][res.gender][res.number][res.grammaticalCase];

  return res;
};

export function randomVerbWithDescription() {
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

export function randomVerbWithDescriptionAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded) {
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