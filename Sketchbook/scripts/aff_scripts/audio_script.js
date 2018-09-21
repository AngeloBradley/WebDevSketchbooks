$(document).ready(function(){
  $(".image-container").click(function(event){
  //event.target.id
  //16 artists
  var artist = event.target.id;
  var site;
  switch(artist){
    case "flying-lotus":
    site = "http://www.flying-lotus.com/";
    break;
    case "sun-ra":
    site = "https://sunramusic.bandcamp.com/";
    break;
    case "theesatisfaction":
    site = "https://theesatisfaction.bandcamp.com/";
    break;
    case "janelle-monae":
    site = "http://www.jmonae.com/";
    break;
    case "zapp-and-roger":
    site = "https://www.youtube.com/watch?v=_aVa7qVKUHI";
    break;
    case "kamasi-washington":
    site = "https://www.kamasiwashington.com/";
    break;
    case "erykah-badu":
    site = "http://www.erykah-badu.com/";
    break;
    case "ras-g":
    site = "https://rasgtheafrikanspaceprogram.bandcamp.com/";
    break;
    case "john-coltrane":
    site = "https://www.youtube.com/watch?v=clC6cgoh1sU";
    break;
    case "yusef-lateef":
    site = "http://yuseflateef.com/";
    break;
    case "nwando-ebizie":
    site = "http://www.nwandoebizie.com/";
    break;
    case "shabazz-palaces":
    site = "http://www.shabazzpalaces.com/";
    break;
    case "laura-mvula":
    site = "http://studiostorehouse.com/client/laura-mvula/";
    break;
    case "mono-poly":
    site = "https://soundcloud.com/theofficialmonopoly";
    break;
    case "xaphryn":
    site="https://soundcloud.com/xaphryn";
    break;
    case "george-clinton":
    site = "https://georgeclinton.com/";
    break;
  }

  window.open(site, "myWindow", 'width=800,height=600');
  });
});
