import wordBank from './wordBank.txt'

export async function generateWords() {
    let wordSet;
  
    await fetch(wordBank)
        .then(response => response.text())
        .then((data) => {
            wordSet = new Set(data.split('\r\n'));
        })

    return wordSet;
}
