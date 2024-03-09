let profilpic = ["img/profil6.jpg", "img/profil7.jpg"];
let profilname = ["Pictures GmbH", "Dog 22"];
let postimage = ["img/post1.jpg", "img/post2.jpg"];
let caption = [
  "Habe das Bild heute gemalt. Wie findet ihrs? #Kunst #image #pic",
  "Ich finde Erdmännchen schon irgendwie süß... #Zoo #Erdmännchen #sweet #cute",
];
let commentator = ["kennstnicht01", "profil2"];
let comment = ["Ein Meisterwerk!!", "Ahh.. die schauen so lustig xD"];
let like = ["95", "150"];

function createpost() {
let postcontainer = document.getElementById("posts");
  postcontainer.innerHTML = "";
  renderPosts();
  loadCommentLocalStorage();
}

function renderPosts() {
  for (let i = 0; i < profilname.length; i++) {
    htmlCode(i)
  }
}

function htmlCode(i){
  const postHTML = `
      <div class="postcomplete">
        <div class="postheader">
          <div class="postprofil">
            <img src="${profilpic[i]}" alt="post${i}" />
            <span>${profilname[i]}</span>
          </div>
          <img class="menu" src="img/Menudots.png" alt="post${i}" />
        </div>

        <div class="image"><img src="${postimage[i]}" alt="post${i}" /></div>

        <div class="postbar">
          <div class="icons">
            <img class="black" id="btn${i}" onclick="liken(${i})" src="img/hearticon.svg" alt="like" />
            <img src="img/chat.svg" alt="comment" />
            <img src="img/send-fill.svg" alt="teilen" />
          </div>
          <img src="img/bookmark-fill.svg" alt="speichern" />
        </div>

        <div class="likes">Gefällt: <span id="likes${i}">${like[i]}</span></div>

        <div class="caption">
          <span class="linkprofil">${profilname[i]}: </span>${caption[i]}
        </div>

        <div class="margin">
          <span class="opacity-color">Alle (606) Kommentare anzeigen</span>
        </div>

        <div id="commentbox${i}" class="comments">
          <span class="linkprofil">${commentator[i]}: </span>${comment[i]}
        </div>

        <div class="inputfield">
          <input id="addcomment${i}" type="text" placeholder="Kommentar hinzufügen..." />
          <button onclick="showNewComment(${i})">Posten</button>
        </div>
      </div>`;
      document.getElementById("posts").innerHTML += postHTML;
}

function liken(postIndex) {
  const button = document.getElementById(`btn${postIndex}`); // Selektieren des Like-Buttons
  const amountLikes = +document.getElementById(`likes${postIndex}`).innerHTML; // Extrahieren der aktuellen Like-Anzahl aus dem DOM
    if (button.classList.contains("black")) { // Überprüfen, ob der Button die Klasse "black" enthält
        button.classList.remove("black");
        button.classList.add("filter-like");
        document.getElementById(`likes${postIndex}`).innerHTML = `${amountLikes + 1}`;
  } else {
      button.classList.remove("filter-like");
      button.classList.add("black");
      document.getElementById(`likes${postIndex}`).innerHTML = `${amountLikes - 1}`;
  }
}

function showNewComment(postIndex) {
  const newComment = document.getElementById(`addcomment${postIndex}`).value; // Extrahieren des neuen Kommentars aus dem Eingabefeld
  if (newComment.trim() !== "") { // Überprüfen, ob der Kommentar nicht leer ist
    const newCommentHTML = `<div><span class="linkprofil">Kai J.: </span>${newComment}</div>`;
    const commentBox = document.getElementById(`commentbox${postIndex}`);
    commentBox.innerHTML += newCommentHTML;
    document.getElementById(`addcomment${postIndex}`).value = "";
    localStorage.setItem(`comment${postIndex}`, newComment);
  }
}

function loadCommentLocalStorage() {
  for (let i = 0; i < profilname.length; i++) { // Laden des im LocalStorage gespeicherten Kommentars für den aktuellen Post
    const storedComment = localStorage.getItem(`comment${i}`);
  
    if (storedComment !== null) { // Überprüfen, ob ein Kommentar im LocalStorage vorhanden ist
      const newCommentHTML = `<div><span class="linkprofil">Kai J.: </span>${storedComment}</div>`;
      const commentBox = document.getElementById(`commentbox${i}`);
      commentBox.innerHTML += newCommentHTML;
    }
  }
}

function showOverlay(action) {
  const menu = document.getElementById('menu');

  if (action === 'open') {
    menu.classList.add('show-overlay');
  } else if (action === 'close') {
    menu.classList.remove('show-overlay');
  }
}
