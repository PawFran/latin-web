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

export const nounDeclensionTree = {
  first: firstDeclension,
  second: secondDeclension,
  thirdConsonant: thirdDeclensionConsonantVariant,
  thirdVowel: thirdDeclensionVowelVariant,
  thirdMixed: thirdDeclensionMixedVariant,
  fourth: fourthDeclension,
  fith: fithDeclension
};