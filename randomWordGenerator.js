import {nounDeclensionTree} from "./noun.js";
import {verbConjugationTree} from "./verb.js";
import {randomKey, randomKeyWithFilter} from "./random.js";
import {personalPronounTree} from "./pronoun.js";

export function randomNounWithDescription() {
  const res = {};

  res.declension = randomKey(nounDeclensionTree);
  res.gender = randomKey(nounDeclensionTree[res.declension]);
  res.number = randomKey(nounDeclensionTree[res.declension][res.gender]);
  res.grammaticalCase = randomKey(nounDeclensionTree[res.declension][res.gender][res.number]);
  res.word = nounDeclensionTree[res.declension][res.gender][res.number][res.grammaticalCase];

  return res;
};

export function randomPersonalPronounWithDescription() {
  const res = {};

  res.number = randomKey(personalPronounTree);
  res.person = randomKey(personalPronounTree[res.number]);
  res.grammaticalCase = randomKey(personalPronounTree[res.number][res.person]);
  res.word = personalPronounTree[res.number][res.person][res.grammaticalCase];

  return res;
}

export function randomVerbWithDescription() {
  const res = {};

  res.conjugation = randomKey(verbConjugationTree);
  res.mood = randomKey(verbConjugationTree[res.conjugation]);
  res.tense = randomKey(verbConjugationTree[res.conjugation][res.mood]);
  res.voice = randomKey(verbConjugationTree[res.conjugation][res.mood][res.tense]);
  res.number = randomKey(verbConjugationTree[res.conjugation][res.mood][res.tense][res.voice]);
  res.person = randomKey(verbConjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number]);
  res.word = verbConjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number][res.person];

  return res;
};

export function randomVerbWithDescriptionAdvanced(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded) {
  const res = {};
  
  res.conjugation = randomKeyWithFilter(verbConjugationTree, conjugationsIncluded);
  res.mood = randomKeyWithFilter(verbConjugationTree[res.conjugation], moodsIncluded);
  res.tense = randomKeyWithFilter(verbConjugationTree[res.conjugation][res.mood], tensesIncluded);
  res.voice = randomKeyWithFilter(verbConjugationTree[res.conjugation][res.mood][res.tense], voicesIncluded);
  res.number = randomKeyWithFilter(verbConjugationTree[res.conjugation][res.mood][res.tense][res.voice], numbersIncluded);
  res.person = randomKeyWithFilter(verbConjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number], personsIncluded);
  res.word = verbConjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number][res.person];

  return res;
};

export function randomVerbFormula(conjugationsIncluded, moodsIncluded, tensesIncluded, voicesIncluded, numbersIncluded, personsIncluded) {
  const res = {};

  res.conjugation = randomKeyWithFilter(verbConjugationTree, conjugationsIncluded);
  res.mood = randomKeyWithFilter(verbConjugationTree[res.conjugation], moodsIncluded);
  res.tense = randomKeyWithFilter(verbConjugationTree[res.conjugation][res.mood], tensesIncluded);
  res.voice = randomKeyWithFilter(verbConjugationTree[res.conjugation][res.mood][res.tense], voicesIncluded);
  res.number = randomKeyWithFilter(verbConjugationTree[res.conjugation][res.mood][res.tense][res.voice], numbersIncluded);
  res.person = randomKeyWithFilter(verbConjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number], personsIncluded);
  res.word = verbConjugationTree[res.conjugation][res.mood][res.tense][res.voice][res.number][res.person];

  return res;
};