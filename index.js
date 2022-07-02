const passphrase_box = document.querySelector('.passphrase');

function passphrase(){
    fetch("wordlist.txt")
    .then(res => res.text())
    .then(data =>{
        let wordlist_to_array = data.split(" "),
            random_number = Math.floor(Math.random() * (30 - 20) + 20).toFixed(0),
            random_array_order = wordlist_to_array.sort(()=> 0.5 - Math.random()),
            shuffle_random_result = random_array_order.slice(0,random_number),
            join_words = shuffle_random_result.join(" ");
            passphrase_box.innerText = join_words;
            
    })
}


window.addEventListener('DOMcontentLoaded',passphrase());