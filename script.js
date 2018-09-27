window.onload = function() {
  registerButtons();
  document.getElementById("noun-form").hidden = true;
};

// *** BUTTONS ***
function registerButtons() {
  document.getElementById("show-nouns").onclick = function() {
    showNouns();
  };

  document.getElementById("random-noun").onclick = function() {
    randomNoun();
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
};

function clear() {
  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML =  "";

  const nounForm = document.getElementById("noun-form");
  nounForm.hidden = true;
  nounForm.reset()
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
  // first: firstDeclension,
  // second: secondDeclension,
  // thirdConsonant: thirdDeclensionConsonantVariant,
  // thirdVowel: thirdDeclensionVowelVariant,
  thirdMixed: thirdDeclensionMixedVariant/*,
  fourth: fourthDeclension,
  fith: fithDeclension*/
};

const randomKey = function (obj) {
    const keys = Object.keys(obj)
    return keys[ keys.length * Math.random() << 0 ];
};

function randomNounWithDescription() {
  const res = {};

  res.declension = randomKey(declensionTree);

  res.genre = randomKey(declensionTree[res.declension]);
  
  res.number = randomKey(declensionTree[res.declension][res.genre]);
  
  res.grammaticalCase = randomKey(declensionTree[res.declension][res.genre][res.number]);
  
  res.word = declensionTree[res.declension][res.genre][res.number][res.grammaticalCase];

  return res;
};

// *** FORM ***
document.getElementById('noun-form').onsubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const declension = formData.get("declension");
  const genre = formData.get("genre");
  const number = formData.get("number");
  const grammaticalCase = formData.get("case");

  console.log("declension: " + declension);
  console.log("genre: " + genre);
  console.log("number: " + number);
  console.log("case: " + grammaticalCase);

  const feedback = isCorrect(declension, genre, number, grammaticalCase);
  if (feedback) {
    console.log("correct");
  } else {
    console.log("incorrect. given answer: declension " + declension + " genre " + genre + " number " + number + " case " + grammaticalCase);
    console.log("correct answer would be: declension " + currentWord.declension + " genre " + 
      currentWord.genre + " number " + currentWord.number + " case " + currentWord.grammaticalCase);
  }
};

// *** FEEDBACK ***
function isCorrect(declension, genre, number, grammaticalCase) {
  // some declensions doesn't have every genres. warning: possible to lose sight of some errors here
  return declensionTree[declension][genre] !== undefined 
    && declensionTree[declension][genre][number][grammaticalCase] === currentWord.word
}