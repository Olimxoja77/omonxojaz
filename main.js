let btn =document.querySelector("button")
let p =document.querySelector('p')


btn.addEventListener('click', ()=>{
    let inp =document.querySelector("input")
    let selekt =document.querySelector("select")
      let select2 =document.querySelector("#select2")
    fetch(`https://api.mymemory.translated.net/get?q=${inp.value}&langpair=${select2.value}${selekt.value}`)
    .then((res) => res.json())
    .then((data) =>{
        p.innerHTML = data.responseData.translatedText;
    })
})