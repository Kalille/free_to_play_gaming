const mainDiv = document.getElementById('main')
const gameContainer = document.getElementById('game-container')


    function fetchByCatergory(){


        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${userInput1}`, {
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






const fetchGamesInOrder = fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json());

const fetchByTitle = fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
// .then(games=>games.slice(0,9))
// .then(games=>games.forEach(game=>console.log(game.title)))


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
 }





 function renderPicture(game){
    const pTag4 = document.createElement('p')
    pTag4.innerText = `Realease Date: ${game.release_date}`
    const divTag = document.createElement('div')
    const h2Tag = document.createElement('h2')
    h2Tag.innerText= game.title
    const imgTag = document.createElement('img')
     imgTag.src = game.thumbnail
     
     divTag.append(imgTag,h2Tag,pTag4)
     gameContainer.append(divTag)
     divTag.addEventListener('click',(e)=>{
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
        
       gameContainer.append(h2Tag,imgTag,pTag3,pTag,pTag2,aTag,);
        
        // console.log(e.target)
        // console.log('clicked')
        // console.log(aTag)
     })
 }





 function fetchSuperhero(){
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
        }
    })
    .then(res=>res.json())
    .then(games=>games.forEach(game=>renderPicture(game)))
    .catch(err =>console.error(err));
 }

 function superHeroGenre(){
 const select_form =document.getElementById('select-form')
 select_form.addEventListener('submit',(e)=>{
    e.preventDefault()
    gameContainer.innerHTML = ""
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err));
     console.log('opt1 clicked')
})
}
// superHeroGenre()



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

function clearBtn(){
    gameContainer.innerHtml="";
const btn = document.getElementById('button')
btn.innerText='CLEAR'
btn.addEventListener('click',()=>{
   gameContainer.innerHTML=""
//    fetchgames()

})
}
clearBtn()


function mostRecentBtn(){
    const divTag= document.createElement('div')
    const recentBtn = document.createElement('button')
    recentBtn.style.width='50%'
    recentBtn.style.height='100%'
    recentBtn.innerText= 'RECENT'
   const col1 = document.getElementById('col-1')
   divTag.appendChild(recentBtn)
       col1.appendChild(divTag)
    recentBtn.addEventListener('click',()=>{
       gameContainer.innerHTML=""
       fetchRecent();
       
    })
    
}
// mostRecentBtn()







function fetchFight(){
fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err));
   

}
function fightBtn(){
    gameContainer.innerHtml=""; 
const fightingBtn = document.getElementById('Fighting')
console.log(fightingBtn)
fightingBtn.addEventListener('click',()=> {
    
    gameContainer.innerHtml="";
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err))
  
})
}
fightBtn();


function actionBtn (){
    gameContainer.innerHtml=""; 
const actionBtn = document.getElementById('action')
console.log(actionBtn)
actionBtn.addEventListener('click',()=> {
    
    gameContainer.innerHtml="";
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=action", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
        }
    })
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err))
  
})
}
actionBtn()

function sups (){
    const superH = document.getElementById('SuperHero')
    superH.addEventListener('click', ()=>{
        gameContainer.innerHtml="";
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err))

    })

}
sups()

function shooter(){
    const shoot = document.getElementById('Shooter')
    shoot.addEventListener('click',()=>{
        gameContainer.innerHtml="";
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err))
    })
}
shooter()

function racer(){
    const race = document.getElementById('racing')
    race.addEventListener('click',()=>{
        gameContainer.innerHtml="";
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err))
    })
}
racer()

function sporty(){
    const sports = document.getElementById('Sports')
    sports.addEventListener('click',()=>{
        gameContainer.innerHtml="";
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err))
    })
}
sporty()

function towerDefense(){
    const tower = document.getElementById('Tower-defense')
    tower.addEventListener('click',()=>{
        gameContainer.innerHtml="";
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=tower-defense", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err))
    })
}
towerDefense()

function allgames(){
    const all= document.getElementById('all-titles')
    all.addEventListener('click',()=>{
        gameContainer.innerHtml="";
    fetchgames()
})
}
allgames()


function recent(){
    const recentBut = document.getElementById('recent')
    recentBut.addEventListener('click',()=>{
        gameContainer.innerHtml="";
     fetchRecent()
        })
    }
  recent()  
  
  function pvp(){
      const gamecontainer =document.getElementById('game-container')
      const pvpbtn = document.getElementById('pvp')
      pvpbtn.addEventListener('click',()=>{
        gamecontainer.innerHtml=""
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=pvp", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err))
      })
  }
  pvp()
  function social(){
      const socialBtn = document.getElementById('Social')
      socialBtn.addEventListener('click',(e)=>{
      e.preventDefault();
        gameContainer.innerHtml="";
      fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=social", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a7efc7bf10msh973c5973b934d10p1ba17cjsn0fe2a17f3bed",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(games=>games.forEach(game=>renderPicture(game)))
.catch(err =>console.error(err))
      })
      }
      social()

const h2Tags= document.querySelectorAll('h2')
h2Tags.style.fontcolor='white'