function wordCountGenerator(text){

    text = text.toLowerCase();

    const words = text.split(" ");

    wordCounts = {};

    words.map(word => {
        if (word in wordCounts){
            wordCounts[word] += 1;
        }
        else{
            wordCounts[word] = 1;
        }
    });

    return wordCounts;
}


text = "This is a test. This test is only a test."
console.log(wordCountGenerator(text));
