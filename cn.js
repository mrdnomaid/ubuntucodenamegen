function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

$.get('animals.txt', function(text) {
  animals = text.split('\n');
  animal = animals[Math.floor(Math.random() * animals.length)];
  letter = animal.charAt(0);

  div = document.getElementById('response');

  $.get('adj.txt', function(text) {

    adjs = shuffleArray(text.split('\n'));

    for (var i = 0; i < adjs.length; i++) {
      if (adjs[i].charAt(0 ) == letter.toLowerCase()) {
        adj = adjs[i];
        write(adj);
        break;
      }
    }

    function write(ad) {
      div.innerHTML = '<a href="http://www.dictionary.com/browse/' + ad + '" target="_blank" rel="noopener noreferrer">' + ad + '</a>';
      div.innerHTML += '&nbsp;';
      div.innerHTML += '<a href="https://en.wikipedia.org/wiki/' + animal + '" target="_blank" rel="noopener noreferrer">' + animal + '</a>';
    }
  });
});
