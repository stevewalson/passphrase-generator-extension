const passphrase = document.querySelector('.passphrase'),
    clear_btn = document.querySelector('.clear'),
    generate_btn = document.querySelector('.generate'),
    copy_btn = document.querySelector('.copy');

generate_passphrase()
passphrase.innerText = localStorage.getItem("passphrases") ;

generate_btn.addEventListener("click",generate_passphrase);

function generate_passphrase(){
    fetch("wordlist.txt")
    .then(res => res.text())
    .then(data =>{
        let wordlist_to_array = data.split(" "),
            random_number = Math.floor(Math.random() * (30 - 20) + 20).toFixed(0),
            random_array_order = wordlist_to_array.sort(()=> 0.5 - Math.random()),
            shuffle_random_result = random_array_order.slice(0,random_number),
            join_words = shuffle_random_result.join(" ").toString();
            chrome.storage.local.set({passphrases:join_words},()=>{
                passphrase.innerText = join_words;
            })
    })
};

  
copy_btn.addEventListener("click",()=>{
     navigator.clipboard.writeText(passphrase.innerText);
})
clear_btn.addEventListener("click",()=>{
    chrome.storage.local.clear(()=>{
        passphrase.innerText = "Click on Generate";
    });
        
 })

