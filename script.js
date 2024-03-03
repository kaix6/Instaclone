let postComplete = [
  {
    profilepic: "img/profil1.jpg",
    profilname: "Heracles",
    postimage: "img/post1.jpg",
    caption: "irgendeinText",
  },

  {
    profilepic: "img/profil2.jpg",
    profilname: "Anonymous",
    postimage: "img/post2.jpg",
    caption: "irgendeinText",
  },

  {
    profilepic: "img/profil3",
    profilname: "IchBinProfil3",
    postimage: "img/post3.jpg",
    caption: "irgendeinText",
  },
];

let currentPost = 0;

function createpost() {
  document.getElementById("posts").innerHTML += `
    <div class ="postcomplete">
        <div class="postheader">
          <div class="postprofil">
            <img src="img/profilepic.jpg" alt="post1"> <span>Profilname</span>
          </div>
          <img class="menu" src="img/Menudots.png" alt="post1">
        </div>

        <div class="image"><img src="img/post1.jpg" alt="post1"></div>

        <div class="postbar">
          <div class="icons"> <img src="img/hearticon.svg" alt="like"> <img src="img/chat.svg" alt="comment"> 
            <img src="img/send-fill.svg" alt="teilen"> </div> <img src="img/bookmark-fill.svg" alt="speichern">
        </div>

        <div class="likes">Gefällt: ...</div>

        <div class="caption"><span class="linkprofil">Profilname:  </span>Das ist mein Hund, schau, wie loyal er schauen kann. Kann man ihm so seine Leckerlis verweigern?</div>

        <div class="margin"><span class="opacity-color">Alle Kommentare anzeigen</span></div>

        <div class="comments">
           <span class="linkprofil">profil1:  </span>So ein süßer <br>
           <span class="linkprofil">profil2:  </span>Was ein schöner Hund...    
        </div>

        <div class="inputfield"><input type=text placeholder="Kommentar hinzufügen..."><button>Posten</button></div>
    </div>`;
}

function liken() {
  const button = document.getElementById('btn');
    if (button.classList.contains("black")) {
        button.classList.remove("black");
        button.classList.add("filter-like");
    } else {
        button.classList.remove("filter-like");
        button.classList.add("black");
    }
}
