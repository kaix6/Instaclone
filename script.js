function render() {
  document.getElementById("posts").innerHTML = "";
  document.getElementById("friends").innerHTML = "";

  createpost();
  createFriendsbox();
}

function createpost() {
  document.getElementById("posts").innerHTML = `
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

render();

function createFriendsbox() {
  document.getElementById("friends").innerHTML = `
<div class="friendscontainer">
  <div class="friendsbox-self-profil">
    <div class="postprofil"><img class="profil" src="img/profilepic.jpg" alt="post1"><span>Profilname</span></div> <a href=''>Wechseln</a>
  </div>

  <div class="vorschläge"><span class="filter">Vorschläge für dich</span><span class="hover">Alle ansehen</span></div>

  <div class="friendsbox">
    <div class="postprofil"><img class="profil" src="img/profilepic.jpg" alt="post1"><span>Profilname</span></div> <a href=''>Abonnieren</a>
  </div>

  <div class="friendsbox">
    <div class="postprofil"><img class="profil" src="img/profilepic.jpg" alt="post1"><span>Profilname</span></div> <a href=''>Abonnieren</a>
  </div>

  <div class="friendsbox">
    <div class="postprofil"><img class="profil" src="img/profilepic.jpg" alt="post1"><span>Profilname</span></div> <a href=''>Abonnieren</a>
  </div>

  <footer>
  <a href'#'>Links</a>
  <a href"#">Links</a>
  <a href"#">Links</a>
  <a href"#">Links</a>
  <a href"#">Links</a>
  <a href"#">Links</a>
  <a href"#">Links</a>
  <a href"#">Links</a>
  <a href"#">Links</a>
  </footer>
</div>
`;
}
