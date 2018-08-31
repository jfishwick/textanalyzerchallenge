function wordCounter(input) {
  return input.length;
}

function uniqueWords(input) {
  var uniques = [];
  for (var i=0; i < input.length; i++) {

    if(uniques.indexOf(input[i]) === -1 ) {
      uniques.push(input[i]);
    }
  }
  return uniques.length;
}

function wordLength(input) {
  var length = input.join("").length;
  return (length/input.length);
}

function createWords(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function runReport(text) {
  var input = createWords(text);
  var wordCount = wordCounter(input);
  var uniques = uniqueWords(input);
  var avgLength = wordLength(input);

  var report = $('.js-text-report');
  report.find('.js-wordCount').text(wordCount);
  report.find('.js-uniqueWords').text(uniques);
  report.find('.js-wordLength').text(avgLength + ' characters');

  report.removeClass('hidden');
}

function formSubmission() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
    var text = $(this).find('#user-text').val();
    runReport(text);
  });
}

$(function(){formSubmission();});