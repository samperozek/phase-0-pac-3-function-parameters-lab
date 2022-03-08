let name, language;

function introduction(name) {
    let intro1
    intro1 = `Hi, my name is ${name}.`;
    return intro1;
}

function introductionWithLanguage(name,language) {
    let intro2;
    intro2 = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return intro2;
}

function introductionWithLanguageOptional(name,language = "JavaScript" ) {
    let intro3;
    intro3 = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return intro3;
}