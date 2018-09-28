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
          first: "laudo",
          second: "laudas",
          third: "laudat"
        },
        pluralis: {
          first: "laudamus",
          second: "laudatis",
          third: "laudant"
        }
      },
      passivus: {
        singularis: {
          first: "laudor",
          second: "laudaris",
          third: "laudatur"
        },
        pluralis: {
          first: "laudamur",
          second: "laudamini",
          third: "laudantur"
        }
      }
    }, 
    imperfectum: {
      activus: {
        singularis: {
          first: "laudabam",
          second: "laudabas",
          third: "laudabat"
        },
        pluralis: {
          first: "laudabamus",
          second: "laudabatis",
          third: "laudabant"
        }
      }, 
      passivus: {
        singularis: {
          first: "laudabar",
          second: "laudabaris",
          third: "laudabatur"
        },
        pluralis: {
          first: "laudabamur",
          second: "laudabamini",
          third: "laudabantur"
        }
      }
    }, 
    futurumPrimum: {
      activus: {
        singularis: {
          first: "laudabo",
          second: "laudabis",
          third: "laudabit"
        },
        pluralis: {
          first: "laudabimus",
          second: "laudabitis",
          third: "laudabunt"
        }
      },
      passivus: {
        singularis: {
          first: "laudabor",
          second: "laudaberis",
          third: "laudabitur"
        },
        pluralis: {
          first: "laudabimur",
          second: "laudabimini",
          third: "laudabuntur"
        }
      }
    },
    perfectum: {
      activus: {
        singularis: {
          first: "laudavi",
          second: "laudavisti",
          third: "laudavit"
        },
        pluralis: {
          first: "laudavimus",
          second: "laudavistis",
          third: "laudaverunt"
        }
      }
    }
  },
  imperativus: {
    praesens: {
      activus: {
        singularis: {
          second: "lauda"
        },
        pluralis: {
          second: "laudate"
        }
      }, 
      passivus: {
        singularis: {
          second: "laudare"
        },
        pluralis: {
          second: "laudamini"
        }
      }
    }
  }
};

const secondConjugation = {
  indicativus: {
    praesens: {
      activus: {
        singularis: {
          first: "moneo",
          second: "mones",
          third: "monet"
        },
        pluralis: {
          first: "monemus",
          second: "monetis",
          third: "monent"
        }
      },
      passivus: {
        singularis: {
          first: "moneor",
          second: "moneris",
          third: "monetur"
        },
        pluralis: {
          first: "monemur",
          second: "monemini",
          third: "monentur"
        }
      }
    }, 
    imperfectum: {
      activus: {
        singularis: {
          first: "monebam",
          second: "monebas",
          third: "monebat"
        },
        pluralis: {
          first: "monebamus",
          second: "monebatis",
          third: "monebant"
        }
      },
      passivus: {
        singularis: {
          first: "monebar",
          second: "monebaris",
          third: "monebatur"
        },
        pluralis: {
          first: "monebamur",
          second: "monebamini",
          third: "monebantur"
        }
      }
    }, 
    futurumPrimum: {
      activus: {
        singularis: {
          first: "monebo",
          second: "monebis",
          third: "monebit"
        },
        pluralis: {
          first: "monebimus",
          second: "monebitis",
          third: "monebunt"
        }
      },
      passivus: {
        singularis: {
          first: "monebor",
          second: "moneberis",
          third: "monebitur"
        },
        pluralis: {
          first: "monebimur",
          second: "monebimini",
          third: "monebuntur"
        }
      }
    },
    perfectum: {
      activus: {
        singularis: {
          first: "monui",
          second: "monuisti",
          third: "monuit"
        },
        pluralis: {
          first: "monuimus",
          second: "monuistis",
          third: "monuerunt"
        }
      }
    }
  },
  imperativus: {
    praesens: {
      activus: {
        singularis: {
          second: "mone"
        },
        pluralis: {
          second: "monete"
        }
      },
      activus: {
        singularis: {
          second: "monere"
        },
        pluralis: {
          second: "monemini"
        }
      }
    }
  }
};

const thirdConjugation = {
  indicativus: {
    praesens: {
      activus: {
        singularis: {
          first: "lego",
          second: "legis",
          third: "legit"
        },
        pluralis: {
          first: "legimus",
          second: "legitis",
          third: "legunt"
        }
      },
      passivus: {
        singularis: {
          first: "legor",
          second: "legeris",
          third: "legitur"
        },
        pluralis: {
          first: "legimur",
          second: "legimini",
          third: "leguntur"
        }
      }
    }, 
    imperfectum: {
      activus: {
        singularis: {
          first: "legebam",
          second: "legebas",
          third: "legebat"
        },
        pluralis: {
          first: "legebamus",
          second: "legebatis",
          third: "legebant"
        }
      },
      passivus: {
        singularis: {
          first: "legebar",
          second: "legebaris",
          third: "legebatur"
        },
        pluralis: {
          first: "legebamur",
          second: "legebamini",
          third: "legebantur"
        }
      }
    }, 
    futurumPrimum: {
      activus: {
        singularis: {
          first: "legam",
          second: "leges",
          third: "leget"
        },
        pluralis: {
          first: "legemus",
          second: "legetis",
          third: "legent"
        }
      },
      passivus: {
        singularis: {
          first: "legar",
          second: "legeris",
          third: "legetur"
        },
        pluralis: {
          first: "legemur",
          second: "legemini",
          third: "legentur"
        }
      }
    },
    perfectum: {
      activus: {
        singularis: {
          first: "legavi",
          second: "legavisti",
          third: "legavit"
        },
        pluralis: {
          first: "legavimus",
          second: "legavistis",
          third: "legaverunt"
        }
      }
    }
  },
  imperativus: {
    praesens: {
      activus: {
        singularis: {
          second: "lege"
        },
        pluralis: {
          second: "legite"
        }
      },
      activus: {
        singularis: {
          second: "legere"
        },
        pluralis: {
          second: "legimini"
        }
      }
    }
  }
};

const fourthConjugation = {
  indicativus: {
    praesens: {
      activus: {
        singularis: {
          first: "audio",
          second: "audis",
          third: "audit"
        },
        pluralis: {
          first: "audimus",
          second: "auditis",
          third: "audiunt"
        }
      },
      passivus: {
        singularis: {
          first: "audior",
          second: "audiris",
          third: "auditur"
        },
        pluralis: {
          first: "audimur",
          second: "audimini",
          third: "audiuntur"
        }
      }
    }, 
    imperfectum: {
      activus: {
        singularis: {
          first: "audiebam",
          second: "audiebas",
          third: "audiebat"
        },
        pluralis: {
          first: "audiebamus",
          second: "audiebatis",
          third: "audiebant"
        }
      },
      passivus: {
        singularis: {
          first: "audiebar",
          second: "audiebaris",
          third: "audiebatur"
        },
        pluralis: {
          first: "audiebamur",
          second: "audiebamini",
          third: "audiebantur"
        }
      }
    }, 
    futurumPrimum: {
      activus: {
        singularis: {
          first: "audiam",
          second: "audies",
          third: "audiet"
        },
        pluralis: {
          first: "audiemus",
          second: "audietis",
          third: "audient"
        }
      },
      passivus: {
        singularis: {
          first: "audiar",
          second: "audieris",
          third: "audietur"
        },
        pluralis: {
          first: "audiemur",
          second: "audiemini",
          third: "audientur"
        }
      }
    },
    perfectum: {
      activus: {
        singularis: {
          first: "audivi",
          second: "audivisti",
          third: "audivit"
        },
        pluralis: {
          first: "audivimus",
          second: "audivistis",
          third: "audiverunt"
        }
      }
    }
  },
  imperativus: {
    praesens: {
      activus: {
        singularis: {
          second: "audi"
        },
        pluralis: {
          second: "audite"
        }
      }, 
      passivus: {
        singularis: {
          second: "audire"
        },
        pluralis: {
          second: "audimini"
        }
      }
    }
  }
};

const conjugationTree = {
  first: firstConjugation,
  second: secondConjugation,
  third: thirdConjugation,
  fourth: fourthConjugation
};

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

  console.log("conjugations included: " + conjugationsIncluded);
  console.log("moods included: " + moodsIncluded);
  console.log("tenses included: " + tensesIncluded);
  console.log("voices included: " + voicesIncluded);
  console.log("numbers included: " + numbersIncluded);
  console.log("persons included: " + personsIncluded);

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

  const feedback = isCorrectNoun(declension, gender, number, grammaticalCase);
  if (feedback) {
    console.log("correct");
  } else {
    console.log("incorrect. given answer: declension " + declension + " gender " + gender + " number " + number 
      + " case " + grammaticalCase);
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

  // console.log("conjugation: " + conjugation);
  // console.log("mood: " + mood);
  // console.log("tense: " + tense);
  // console.log("voice: " + voice);
  // console.log("number: " + number);
  // console.log("person: " + person);

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
};

function isCorrectVerb(conjugation, mood, tense, voice, number, person) {
  return conjugationTree[conjugation][mood][tense][voice][number][person] === currentWord.word
};
