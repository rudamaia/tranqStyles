document.getElementsByTagName('html')[0].setAttribute("dark", "");
setTimeout(function(){ document.getElementsByTagName('yt-live-chat-viewer-engagement-message-renderer')[0].remove(); }, 2000);


var cssChat = getCSS("fullscreen.css")
addSheet(cssChat)

function addSheet(css) {
  // initiate vars
  var style = document.createElement("style");

  style.type = 'text/css';
  style.setAttribute("name", css[1].split('.')[0]);
  style.appendChild(document.createTextNode(css[0]));

  document.getElementsByTagName("head")[0].appendChild(style)
}

function getCSS(css) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', "https://raw.githubusercontent.com/rudamaia/tranqStyles/master/css/" + css, false);
  xmlhttp.send();
  return [xmlhttp.responseText, css]
}
