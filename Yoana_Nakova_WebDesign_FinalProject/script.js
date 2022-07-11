class Word {
    constructor(language, wordSyntax, meaningNoun, meaningVerb, prononciation, synonims) {
        this.language = language;
        this.wordSyntax = wordSyntax;
        this.meaningNoun = meaningNoun;
        this.meaningVerb = meaningVerb;
        this.prononciation = prononciation;
        this.synonims = synonims;
    }
}

class TranslationPair {
    constructor(translateFromLanguage, translateToLanguage, wordToTranslate, translatedWord) {
        this.translateFromLanguage = translateFromLanguage;
        this.translateToLanguage = translateToLanguage;
        this.wordToTranslate = wordToTranslate;
        this.translatedWord = translatedWord;
    }
}

class Dictionary {

    constructor(translationPairs) {
        this.translationPairs = translationPairs;
    }

    searchTranslation(fromLanguage, toLanguage, wordSyntax) {

        var isTranslationFound = false;

        for (let i = 0; i < this.translationPairs.length; i++) {
            var currentTranslationPair = this.translationPairs[i];


            if (currentTranslationPair.translateFromLanguage.toUpperCase() == fromLanguage.toUpperCase() && currentTranslationPair.translateToLanguage.toUpperCase() == toLanguage.toUpperCase()) {
                if (currentTranslationPair.wordToTranslate.wordSyntax.toUpperCase() == wordSyntax.toUpperCase()) {
                    displayWordFrom(currentTranslationPair.wordToTranslate);
                    displayWordTo(currentTranslationPair.translatedWord);
                    isTranslationFound = true;
                }

            }
        }

        if (!isTranslationFound) {
            alert('No translation found for ' + wordSyntax);
        }

    }
}

var dictionaryInEnglish = new Word('English', 'Dictionary', 'noun- A book or electronic resource that lists the words of a language', '', '[ˈdikSHəˌnerē]', 'synonims - lexicon, vocabulary list,wordbookwordbook ');
var dictionaryInBulgarian = new Word('Bulgarian', 'Речник', 'рѐчник — съществително име, мъжки род', ' Книга, в която са подредени по азбучен ред думи, за да бъдат изтълкувани, преведени на друг език и др', 'реч-ник', 'синоними -словар, лексикон');

var beachInEnglish = new Word('English', 'Beach', 'noun -beach, sands, foreshore, lido', 'verb -run or haul up (a boat or ship) on to a beach.At the waters edge a rowboat was beached', '[biːʧ]', 'synonims - seaside, coast, coastal region');
var beachInBulgarian = new Word('Bulgarian', 'Плаж', 'плаж — съществително име, мъжки род', '', 'плаж', 'синоними - бряг');


var buildInEnglish = new Word('English', 'Build', ' noun -form, uniform, shape, mold, mode, build', 'verb - construct (something) by putting parts or material together.', '[bɪld]', 'synonims - build, construct, make, upbuild');
var buildInBulgarian = new Word('Bulgarian', 'Изграждане', 'изгра̀ждане — съществително име, среден род', 'построяване, постройка, здание', 'из-г-раж-да-не', 'синоними - установяване, създаване, основаване, въвеждане');

var catInEnglish = new Word('English', 'Cat', 'noun - animal', '', '[kæt]', '');
var catInBulgarian = new Word('Bulgarian', 'Котка', 'съществително - животно от тип котки', '', 'кот-ка', '');

var dictionaryTranslationPairEnglish = new TranslationPair('English', 'Bulgarian', dictionaryInEnglish, dictionaryInBulgarian);
var dictionaryTranslationPairBulgarian = new TranslationPair('Bulgarian', 'English', dictionaryInBulgarian, dictionaryInEnglish);

var beachTranslationPairEnglish = new TranslationPair('English', 'Bulgarian', beachInEnglish, beachInBulgarian);
var beachTranslationPairBulgarian = new TranslationPair('Bulgarian', 'English', beachInBulgarian, beachInEnglish);

var buildTranslationPairEnglish = new TranslationPair('English', 'Bulgarian', buildInEnglish, buildInBulgarian);
var buildTranslationPairBulgarian = new TranslationPair('Bulgarian', 'English', buildInBulgarian, buildInEnglish);

var catTranslationPairEnglish = new TranslationPair('English', 'Bulgarian', catInEnglish, catInBulgarian);
var catTranslationPairBulgarian = new TranslationPair('Bulgarian', 'English', catInBulgarian, catInEnglish);

var allPairs = [catTranslationPairBulgarian, catTranslationPairEnglish, dictionaryTranslationPairBulgarian, dictionaryTranslationPairEnglish, beachTranslationPairBulgarian, beachTranslationPairEnglish, buildTranslationPairBulgarian, buildTranslationPairEnglish]
var dictionary = new Dictionary(allPairs);

function displayWordFrom(word) {
    var wordToTranslation = document.getElementById('wordToTranslate');
    wordToTranslation.innerHTML = word.wordSyntax;

    var wordToTranslateFrom = document.getElementById('wordToTranslateFrom');
    wordToTranslateFrom.innerHTML = word.language;

    var wordToTranslateMeaningNoun = document.getElementById('wordToTranslateMeaningNoun');
    wordToTranslateMeaningNoun.innerHTML = word.meaningNoun;

    var wordToTranslateMeaningVerb = document.getElementById('wordToTranslateMeaningVerb');
    wordToTranslateMeaningVerb.innerHTML = word.meaningVerb;

    var wordToTranslatePronociation = document.getElementById('wordToTranslatePronociation');
    wordToTranslatePronociation.innerHTML = word.prononciation;

    var wordToTranslateSynonims = document.getElementById('wordToTranslateSynonims');
    wordToTranslateSynonims.innerHTML = word.synonims;
};



function displayWordTo(word) {
    var translatedWord = document.getElementById('translatedWord');
    translatedWord.innerHTML = word.wordSyntax;

    var wordToTranslateTo = document.getElementById('wordToTranslateTo');
    wordToTranslateTo.innerHTML = word.language;

    var translatedWordMeaningNoun = document.getElementById('translatedWordMeaningNoun');
    translatedWordMeaningNoun.innerHTML = word.meaningNoun;

    var translatedWordMeaningVerb = document.getElementById('translatedWordMeaningVerb');
    translatedWordMeaningVerb.innerHTML = word.meaningVerb;


    var translatedWordPronociation = document.getElementById('translatedWordPronociation');
    translatedWordPronociation.innerHTML = word.prononciation;

    var translatedWordSynonims = document.getElementById('translatedWordSynonims');
    translatedWordSynonims.innerHTML = word.synonims;
};

var firstSelector = document.getElementById('select1');
var secondSelector = document.getElementById('select2');


function Clicked(e) {
    var searchField = document.getElementById('form1');
    dictionary.searchTranslation(firstSelector.value, secondSelector.value, searchField.value);
}

$(document).ready(function () {
    var wordToTranslateform = $('#wordToTranslate');
    wordToTranslateform.css('cursor', 'pointer');
    var translatedWordform = $('#translatedWord');
    translatedWordform.css('cursor', 'pointer');

    wordToTranslateform.click(function () {
        $('p').toggle(1000);
    })
    translatedWordform.click(function () {
        $('p').toggle(1000);
    })

})

document.getElementById("form1")
    .addEventListener("keyup", function(e) {
        if (e.code === 'Enter') {
            document.getElementById("buttonTranslate").click();
        }
    });
 
document.getElementById("buttonTranslate").onclick = function() {
    dictionary.searchTranslation(firstSelector.value, secondSelector.value, searchField.value);
   
}

