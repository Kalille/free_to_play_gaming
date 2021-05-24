

 function fetchgames(){
 fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderGames(game)))
}

fetchgames()
function renderGames(game){
    const gameContainer = document.getElementById('game-container')
    const liTag =  document.createElement('li')
    liTag.innerHTML = game.thumbnail
    gameContainer.appendChild(liTag)
    liTag.addEventListener('click',(e)=>{
        e.target
    })

}


// .then(res => {
//     res.json()
// })
// .then(console.log)
// .catch(err => {
// 	console.error(err);
// });


// fetchMemes()


// const inputbox = document.getElementById('firstname');
// const drinkContainer =document.getElementById('joke-container');

// function renderDrink(game){
//     const div1 = document.createElement('div')
//     const liTag = document.createElement('li')
//     liTag.innerHTML=  `<div> <h2>${games.id}</h2></div>`
//     drinkContainer.appendChild(liTag)
//     div1.appendChild(drinkContainer)
// }

// const sign_in = document.getElementById('sign-in')
// // sign_in.addEventListener('submit',(e)=>{
// //     e.preventDefault()
// //     console.log(e.target.innerText.value)
// // })

// // const input = e.target.querySelector('#new-task-description').value
// function login(){
// sign_in.addEventListener('submit', (e)=>{
//     e.preventDefault();
//    const input = e.target.querySelector('#firstname').value
//     const pTag = document.createElement('p')
//     pTag.innerHTML = input
//     jokeContainer.appendChild(pTag)
//     sign_in.reset()
//    console.log(input)
// }
// )
// }