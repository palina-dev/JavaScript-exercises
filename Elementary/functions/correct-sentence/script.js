function correctSentence(text) {
    text = text[0].toUpperCase() + text.slice(1);
    if (!text.endsWith('.')) {
        return text + '.';
    }
    return text;
}
correctSentence("greetings, friends"); // "Greetings, friends."
correctSentence("Greetings, friends"); // "Greetings, friends."
correctSentence("Greetings, friends."); // "Greetings, friends."

function correctSentence2(text) {
    return text[0].toUpperCase() + text.replace(/\.?$/, '.').slice(1);
}
correctSentence2("greetings, friends"); // "Greetings, friends."
correctSentence2("Greetings, friends"); // "Greetings, friends."
correctSentence2("Greetings, friends."); // "Greetings, friends."