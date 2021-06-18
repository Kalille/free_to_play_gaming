const mainDiv = document.getElementById('main')
const gameContainer = document.getElementById('game-container')


function target(){
    
    const buttonContainer = document.querySelector('#col-1')
    buttonContainer.addEventListener('click', (e)=>{
        gameContainer.innerHTML= ""
        const target = e.target.id
      if(target === 'alphabetical'){
          allgames()
        }
        else if (target === 'recent'){
            fetchRecent()
        }
        else{

        
  fetchByCatergory(target)
      }
    }   
)
}
target()

function fetchRecent(){
   
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(newGames=>newGames.slice(0,9))
    .then(newGames=>newGames.forEach(game=>renderPicture(game)))
    
    .catch(err => {
        console.error(err);
    });
    }
    // fetchRecent()

function fetchByCatergory(target){


        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${target}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err => {
	console.error(err);
})
}
// fetchByCatergory()

function fetchgames(){
    
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical", {
       "method": "GET",
       "headers": {
           "x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
           "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
       }
   })
   .then(res=>res.json())
   // .then(games=>games.slice(0,10))
   .then(games=>games.forEach(game=>renderPicture(game)))
   .catch(err=>console.error(err))
   console.log('anything')
    }

function allgames(){
    const all= document.getElementById('alphabetical')
    all.addEventListener('click',()=>{
        gameContainer.innerHTML="";
    fetchgames()
})
}
// allgames()

function clearBtn(){
   
    const btn = document.getElementById('button')
    btn.innerText='CLEAR'
    btn.addEventListener('click',()=>{
       gameContainer.innerHTML=""
    //    fetchgames()
    
    })
    }
    clearBtn()

    function renderPicture(game){
        const {title,thumbnail} = game
       const pTag4 = document.createElement('p')
       pTag4.innerText = `Realease Date: ${game.release_date}`
       const divTag = document.createElement('div')
       const h2Tag = document.createElement('h2')
       h2Tag.innerText= title
       const imgTag = document.createElement('img')
        imgTag.src = thumbnail
        
        divTag.append(imgTag,h2Tag,pTag4)
        gameContainer.append(divTag)
        divTag.addEventListener('click',()=> renderGameDetails(game))
   
    } 
       
   
   function renderGameDetails(game){
       gameContainer.innerHTML= ""
       const aTag = document.createElement('a');
       const liTag = document.createElement('li');
       const imgTag = document.createElement('img');
       const h2Tag = document.createElement('h2');
       const pTag = document.createElement('p');
       const pTag2 = document.createElement('p');
       const pTag3 = document.createElement('p')
       
       pTag3.innerText = `Realease Date: ${game.release_date}`
       pTag2.style.fontWeight = '900'
       h2Tag.innerHTML = game.title;
       h2Tag.style.fontcolor='white';
       imgTag.src = game.thumbnail;
       pTag2.innerHTML = ` GENRE: ${game.genre} <br> <b>For full experience visit:</b>`;
       pTag.innerHTML = game.short_description;
       aTag.href= '#';
       aTag.innerHTML = game.game_url;
       
      gameContainer.append(h2Tag,imgTag,pTag3,pTag,pTag2,aTag);
   
   
   }


