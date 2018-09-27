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
  document.getElementById("noun-form").hidden = true;
};

function randomNoun() {
  currentWord = randomNounWithDescription();

  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "Word: " + currentWord.word;

  document.getElementById("noun-form").hidden = false;
  document.getElementById("verb-form").hidden = true;
};

function randomVerb() {
  currentWord = randomVerbWithDescription();

  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "Word: " + currentWord.word;

  document.getElementById("verb-form").hidden = false;
  document.getElementById("noun-form").hidden = true;
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
};

function loadPage(href){
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
};

let currentWord;

// *** GRAMMAR ***
const firstDeclension = {  
  femininum: {
    singularis: {
      nominativus: "ancilla",
      genetivus: "ancillae",
      dativus: "ancillae",
      accusativus: "ancillam",
      ablativus: "ancilla",
      vocativus: "ancilla"
    },
    pluralis: {
      nominativus: "ancillae",
      genetivus: "ancillarum",
      dativus: "ancillis",
      accusativus: "ancillas",
      ablativus: "ancillis",
      vocativus: "ancillae"
    }
  }
};

const secondDeclension = {
  masculinum: {
    singularis: {
      nominativus: "servus",
      genetivus: "servi",
      dativus: "servo",
      accusativus: "servum",
      ablativus: "servo",
      vocativus: "serve"
    },
    pluralis: {
      nominativus: "servi",
      genetivus: "servorum",
      dativus: "servis",
      accusativus: "servos",
      ablativus: "servis",
      vocativus: "servi"
    }
  },
  /*masculinum2: {
    singularis: {
      nominativus: "puer",
      genetivus: "pueri",
      dativus: "puero",
      accusativus: "puerum",
      ablativus: "puero",
      vocativus: "puer"
    },
    pluralis: {
      nominativus: "pueri",
      genetivus: "puerorum",
      dativus: "pueris",
      accusativus: "pueros",
      ablativus: "pueris",
      vocativus: "pueri"
    }
  },*/
  neutrum: {
    singularis: {
      nominativus: "oppidum",
      genetivus: "oppidi",
      dativus: "oppido",
      accusativus: "oppidum",
      ablativus: "oppido",
      vocativus: "oppidum"
    },
    pluralis: {
      nominativus: "oppida",
      genetivus: "oppidorum",
      dativus: "oppidis",
      accusativus: "oppida",
      ablativus: "oppidis",
      vocativus: "oppida"
    }
  }
};

const thirdDeclensionConsonantVariant = {
  masculinum: {
    singularis: {
      nominativus: "imperator",
      genetivus: "imperatoris",
      dativus: "imperatori",
      accusativus: "imperatorem",
      ablativus: "imperatore",
      vocativus: "imperator"
    },
    pluralis: {
      nominativus: "imperatores",
      genetivus: "imperatorum",
      dativus: "imperatoribus",
      accusativus: "imperatores",
      ablativus: "imperatoribus",
      vocativus: "imperatores"
    }
  },
  femininum: {
    singularis: {
      nominativus: "lex",
      genetivus: "legis",
      dativus: "legi",
      accusativus: "legem",
      ablativus: "lege",
      vocativus: "lex"
    },
    pluralis: {
      nominativus: "leges",
      genetivus: "legum",
      dativus: "legibus",
      accusativus: "leges",
      ablativus: "legibus",
      vocativus: "leges"
    }
  },
  neutrum: {
    singularis: {
      nominativus: "nomen",
      genetivus: "nominis",
      dativus: "nomini",
      accusativus: "nomen",
      ablativus: "nomine",
      vocativus: "nomen"
    },
    pluralis: {
      nominativus: "nomina",
      genetivus: "nominum",
      dativus: "nominibus",
      accusativus: "nomina",
      ablativus: "nominibus",
      vocativus: "nomina"
    }
  }
};

const thirdDeclensionVowelVariant = {
  neutrum: {
    singularis: {
      nominativus: "vectigal",
      genetivus: "vectigalis",
      dativus: "vectigali",
      accusativus: "vectigal",
      ablativus: "vectigali",
      vocativus: "vectigal"
    },
    pluralis: {
      nominativus: "vectigalia",
      genetivus: "vectigalium",
      dativus: "vectigalibus",
      accusativus: "vectigalia",
      ablativus: "vectigalibus",
      vocativus: "vectigalia"
    }
  }
};

const thirdDeclensionMixedVariant = {
  femininum: {
    singularis: {
      nominativus: "urbs",
      genetivus: "urbis",
      dativus: "urbi",
      accusativus: "urbem",
      ablativus: "urbe",
      vocativus: "urbs"
    },
    pluralis: {
      nominativus: "urbes",
      genetivus: "urbium",
      dativus: "urbibus",
      accusativus: "urbes",
      ablativus: "urbibus",
      vocativus: "urbes"
    }
  }
};

const fourthDeclension = {
  masculinum: {
    singularis: {
      nominativus: "exercitus",
      genetivus: "exercitus",
      dativus: "exercitui",
      accusativus: "exercitum",
      ablativus: "exercitu",
      vocativus: "exercitus"
    },
    pluralis: {
      nominativus: "exercitus",
      genetivus: "exercituum",
      dativus: "exercitibus",
      accusativus: "exercitus",
      ablativus: "exercitibus",
      vocativus: "exercitus"
    }
  },
  neutrum: {
    singularis: {
      nominativus: "cornu",
      genetivus: "cornus",
      dativus: "cornu",
      accusativus: "cornu",
      ablativus: "cornu",
      vocativus: "cornu"
    },
    pluralis: {
      nominativus: "cornua",
      genetivus: "cornuum",
      dativus: "cornibus",
      accusativus: "cornua",
      ablativus: "cornibus",
      vocativus: "cornua"
    }
  }
};

const fithDeclension = {
  femininum: {
    singularis: {
      nominativus: "res",
      genetivus: "rei",
      dativus: "rei",
      accusativus: "rem",
      ablativus: "re",
      vocativus: "res"
    },
    pluralis: {
      nominativus: "res",
      genetivus: "rerum",
      dativus: "rebus",
      accusativus: "res",
      ablativus: "rebus",
      vocativus: "res"
    }
  }
};

const declensionTree = {
  first: firstDeclension,
  second: secondDeclension,
  thirdConsonant: thirdDeclensionConsonantVariant,
  thirdVowel: thirdDeclensionVowelVariant,
  thirdMixed: thirdDeclensionMixedVariant,
  fourth: fourthDeclension,
  fith: fithDeclension
};

const firstConjugation = {
  indicativus: {
    praesens: {
      activus: {
        singularis: {
          first: "laboro",
          second: "laboras",
          third: "laborat"
        },
        pluralis: {
          first: "laboramus",
          second: "laboratis",
          third: "laborant"
        }
      }
    }
  },
  imperativus: {
    praesens: {
      activus: {
        singularis: {
          second: "labora"
        },
        pluralis: {
          second: "laborate"
        }
      }
    }
  }
};

const conjugationTree = {
  first: firstConjugation
}

const randomKey = function (obj) {
    const keys = Object.keys(obj)
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
}

// *** FORM ***
document.getElementById('noun-form').onsubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const declension = formData.get("declension");
  const gender = formData.get("gender");
  const number = formData.get("number");
  const grammaticalCase = formData.get("case");

  console.log("declension: " + declension);
  console.log("gender: " + gender);
  console.log("number: " + number);
  console.log("case: " + grammaticalCase);

  const feedback = isCorrectNoun(declension, gender, number, grammaticalCase);
  if (feedback) {
    console.log("correct");
  } else {
    console.log("incorrect. given answer: declension " + declension + " gender " + gender + " number " + number + " case " + grammaticalCase);
    console.log("correct answer would be: declension " + currentWord.declension + " gender " + 
      currentWord.gender + " number " + currentWord.number + " case " + currentWord.grammaticalCase);
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

  console.log("conjugation: " + conjugation);
  console.log("mood: " + mood);
  console.log("tense: " + tense);
  console.log("voice: " + voice);
  console.log("number: " + number);
  console.log("person: " + person);

  const feedback = isCorrectVerb(conjugation, mood, tense, voice, number, person);
  if (feedback) {
    console.log("correct");
  } else {
    console.log("incorrect. given answer: conjugation " + conjugation + " mood " + mood + " tense " + tense + " voice " + voice
      + " number " + number + " person " + person);
    console.log("correct answer would be: conjugation " + currentWord.conjugation + " mood " + currentWord.mood + " tense " 
      + currentWord.tense + " voice " + currentWord.voice+ " number " + currentWord.number + " person " + currentWord.person);
  }
};

// *** FEEDBACK ***
function isCorrectNoun(declension, gender, number, grammaticalCase) {
  // some declensions doesn't have every genders. warning: possible to lose sight of some errors here
  return declensionTree[declension][gender] !== undefined 
    && declensionTree[declension][gender][number][grammaticalCase] === currentWord.word
}

function isCorrectVerb(conjugation, mood, tense, voice, number, person) {
  return conjugationTree[conjugation][mood][tense][voice][number][person] === currentWord.word
}