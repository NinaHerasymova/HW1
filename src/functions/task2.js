function numberToWords(n) {
    if(n>999){
        alert('Number is too large!!!!')
    }
    var string = n,
      units, tens, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    var and = 'and';
    if (string == '0') {
        console.log( 'zero');
    }

    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    chunksLen = chunks.length;
    
    words = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            ints = chunks[i].split('').reverse().map(parseFloat);

            if (ints[1] === 1) {
                ints[0] += 10;
            }

            
            if ((word = units[ints[0]])) {
                words.push(word);
            }

            if ((word = tens[ints[1]])) {
                words.push(word);
            }

            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }

        } console.log(words.reverse().join(' '));

    }

   

}
numberToWords(prompt('Enter your number'))