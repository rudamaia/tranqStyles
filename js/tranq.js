document.getElementsByTagName('html')[0].setAttribute("dark", "");
document.onload = onLoad

var cssChat = getCSS("chat.css")

function onLoad() {
  if (document.querySelector('.live-chat-unavailable') !== null || document.querySelector('#chat-messages') == null) {
    return "chat unavailable'"
  }
  addSheet(cssChat)
}

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
