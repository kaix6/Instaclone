let profilpic = ["img/profil6.jpg", "img/profil7.jpg"];
let profilname = ["Pictures GmbH", "Dog 22"];
let postimage = ["img/post1.jpg", "img/post2.jpg"];
let caption = [
  "Habe das Bild heute gemalt. Wie findet ihrs? #Kunst #image #pic",
  "Ich finde Erdmännchen schon irgendwie süß... #Zoo #Erdmännchen #sweet #cute",
];
let commentator = ["kennstnicht01", "profil2"];
let comment = ["Ein Meisterwerk!!", "Ahh.. die schauen so lustig xD"];
let like = ['95', '150'];

let currentPost = 0;

function createpost() {
  let postcontainer = document.getElementById("posts");
  postcontainer.innerHTML = "";

  for (let i = 0; i < profilname.length; i++) {
    const profilPics = profilpic[i];
    const profilNames = profilname[i];
    const postImages = postimage[i];
    const captions = caption[i];
    const commentators = commentator[i];
    const comments = comment[i];
    const likes = like[i];

    document.getElementById("posts").innerHTML += `
  <div class="postcomplete">
  <div class="postheader">
    <div class="postprofil">
      <img src="${profilPics}" alt="post1" />
      <span>${profilNames}</span>
    </div>
    <img class="menu" src="img/Menudots.png" alt="post1" />
  </div>

  <div class="image"><img src="${postImages}" alt="post1" /></div>

  <div class="postbar">
    <div class="icons">
<img class="black" id="btn${i}" onclick="liken()" src="img/hearticon.svg" alt="like" />
      <img src="img/chat.svg" alt="comment" />
      <img src="img/send-fill.svg" alt="teilen" />
    </div>
    <img src="img/bookmark-fill.svg" alt="speichern" />
  </div>

  <div class="likes">Gefällt: <span id="likes${i}">${likes}</span></div>

  <div class="caption">
    <span class="linkprofil">${profilNames}: </span>${captions}
  </div>

  <div class="margin">
    <span class="opacity-color">Alle (606) Kommentare anzeigen</span>
  </div>

  <div id="commentbox${i}" class="comments">
    <span class="linkprofil">${commentators}: </span>${comments}

  </div>

  <div class="inputfield">
    <input id="addcomment${i}" type="text" placeholder="Kommentar hinzufügen..." />
    <button onclick="showNewComment()">Posten</button>
  </div>
</div>`;
  }
}

function liken() {
  const button = document.getElementById("btn0");
  const amountLikes = +document.getElementById("likes0").innerHTML;
  console.log(amountLikes);
  if (button.classList.contains("black")) {
    button.classList.remove("black");
    button.classList.add("filter-like");
    let calculate = amountLikes + 1;
    document.getElementById("likes0").innerHTML = `${calculate}`;
  } else {
    button.classList.remove("filter-like");
    button.classList.add("black");
    let calculate = amountLikes - 1;
    document.getElementById("likes0").innerHTML = `${calculate}`;
  }

  const button2 = document.getElementById("btn1");
  const amountLikes2 = +document.getElementById("likes1").innerHTML;
  if (button2.classList.contains("black")) {
    button2.classList.remove("black");
    button2.classList.add("filter-like");
    let calculate = amountLikes2 + 1;
    document.getElementById("likes1").innerHTML = `${calculate}`;
  } else {
    button2.classList.remove("filter-like");
    button2.classList.add("black");
    let calculate = amountLikes2 - 1;
    document.getElementById("likes1").innerHTML = `${calculate}`;
  }
}

function showNewComment() {
  const newComment = document.getElementById('addcomment0').value;

  if (newComment.trim() !== '') {
    // Prüfen Sie, ob der Kommentar nicht leer ist

    // Erstellen Sie den HTML-Code für den neuen Kommentar
    const newCommentHTML = `<div><span class="linkprofil">Kai J.: </span>${newComment}</div>`;

    // Fügen Sie den neuen Kommentar-HTML-Code zur Kommentarbox hinzu
    const commentBox0 = document.getElementById('commentbox0');
    commentBox0.innerHTML += newCommentHTML;

    // Leeren Sie das Eingabefeld
    document.getElementById('addcomment0').value = '';
  }

  const newComment2 = document.getElementById('addcomment1').value;

  if (newComment2.trim() !== '') {
    // Prüfen Sie, ob der Kommentar nicht leer ist

    // Erstellen Sie den HTML-Code für den neuen Kommentar
    const newComment2HTML = `<div><span class="linkprofil">Kai J.: </span>${newComment2}</div>`;

    // Fügen Sie den neuen Kommentar-HTML-Code zur Kommentarbox hinzu
    const commentBox1 = document.getElementById('commentbox1');
    commentBox1.innerHTML += newComment2HTML;

    // Leeren Sie das Eingabefeld
    document.getElementById('addcomment1').value = '';
  }
}