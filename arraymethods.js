console.log("javaScript linked");

// CREATE ARRAYS //
let song = [];
let album = [];
let artist = [];

// INITIALIZE ARRAYS //
song.push = ("So Far Away","Elementary","Reverie","Decades","Starlight Nights","Moonrays","Evade","salience","Dusk","Xtract");
album.push = ("Visitors(2023)","Elementary(2029)","Reverie(199X)","Decades(2339)","Starlight Nights(2X9Z)","Moonrays(2011)","Descend(2146)","salience(5419)","Dusk(2001)","Xtract(3002)");
artist.push = ("Lazerhawk","Zane Alexander","oDDling","Skjalg A. Skagen","Maya & Starforce","MoweLan","Emil Rottmayer","hello meteor","HOME","Audiotool Day 2016");

// DOM SHIT //
let selectDiv = document.getElementById("musicDiv");
let selectSong = document.getElementById("songSec");
let selectAlbum = document.getElementById("albumSec");
let selectArtist = document.getElementById("artistSec");


selectDiv.innerHTML = 
`<section id="songSec"><label>song: </label></section>
<section id="albumSec"><label>album: </label></section>
<section id="artistSec"><label>artist: </label></section>`;