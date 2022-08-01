console.log('Starting up');

$(document).ready(initPage)

var gProjs = [{
    id: "minesweeper",
    name: "Minesweeper",
    title: "the minesweeper the game",
    desc: "the minesweeper game , enjoy.",
    url: "https://alon-thegithub.github.io/my-first-sprint-/",
    publishedAt: new Date().toDateString(),
    labels: ["Matrixes", "keyboard events"],
    imgSrc: "img/mineswepper.png",
    intro: "intro",
    category: "games"


},
{
    id: "book-store",
    name: "book-store",
    title: "the bookstore",
    desc: "the minesweeper game , enjoy.",
    url: "https://alon-thegithub.github.io/book-shop/",
    publishedAt: new Date().toDateString(),
    labels: ["Matrixes", "keyboard events"],
    imgSrc: "img/bookstore.png",
    intro: "intro",
    category: "games"

},
{
    id: "board-game",
    name: "board-game",
    title: "the minesweeper the game",
    desc: "the minesweeper game , enjoy.",
    url: "https://alon-thegithub.github.io/board-game/",
    publishedAt: new Date().toDateString(),
    labels: ["Matrixes", "keyboard events"],
    imgSrc: "img/boardgames.jpeg",
    intro: "intro",
    category: "games"
},

]
function initPage() {
    renderPortfolioProjects()
}

function renderPortfolioProjects() {
    var modalsHtmls = ''
    var portfolioItemsHtmls= ''
    gProjs.map((proj, index) => {
        portfolioItemsHtmls += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${index + 1}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <div class="portfolio-item-img">
          <img class="img-fluid" src="${proj.imgSrc}" alt="">
          </div>
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.category}</p>
        </div>
      </div>`
        modalsHtmls += `<div class="portfolio-modal modal fade" id="portfolioModal${index + 1}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
            <div class="lr">
                <div class="rl"></div>
            </div>
            </div>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                    <h2>${proj.name}</h2>
                    <a class="click-to-play" href="${proj.url}">
                    <i>click here to enter!</i>
                    </a>
                    <p class="item-intro text-muted">${proj.intro}</p>
                    <img class="img-fluid d-block mx-auto" src="${proj.imgSrc}" alt="">
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                    <li>Date: ${proj.publishedAt}</li>
                    <li>Client: Threads</li>
                    <li>Category:${proj.category}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>`
    })
    var elPortfolioItems = document.querySelector('.portfolio-items')
    elPortfolioItems.innerHTML = portfolioItemsHtmls

    var elPortfolioModals = document.querySelector('.portfolio-modals')
    elPortfolioModals.innerHTML = modalsHtmls
}

function onSend() {
    var fromEmail = document.getElementById('email').value
    var subject = document.getElementById('subject').value
    var content = document.getElementById('message').value

    console.log('fromEmail:' , fromEmail)
    

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=1alonavisar@gmail.com&su=${subject}&body=${content} ,${fromEmail}`)
}