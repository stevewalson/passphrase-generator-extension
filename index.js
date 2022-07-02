const passphrase = document.querySelector('.passphrase'),
generate_btn = document.querySelector('.generate');
    copy_btn = document.querySelector('.copy');


passphrase.innerText = localStorage.getItem('passphrase');

    generate_btn.addEventListener("click",()=>{
        fetch("wordlist.txt")
        .then(res => res.text())
        .then(data =>{
            let wordlist_to_array = data.split(" "),
                random_number = Math.floor(Math.random() * (30 - 20) + 20).toFixed(0),
                random_array_order = wordlist_to_array.sort(()=> 0.5 - Math.random()),
                shuffle_random_result = random_array_order.slice(0,random_number),
                join_words = shuffle_random_result.join(" ");
                passphrase.innerText = join_words;
                localStorage.setItem('passphrase',join_words);
                
        })
    })
    copy_btn.addEventListener("click",()=>{
        navigator.clipboard.writeText(passphrase.innerText);
    })
