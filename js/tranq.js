var iframe = document.createElement('iframe');
var player = document.getElementsByClassName('ytp-embed');
var html5player = ""

//_gDysWhXtwQ
//sP6SaKn2WuM"
iframe.src = "https://www.youtube.com/live_chat?v=_gDysWhXtwQ";
iframe.style.border = 0;
iframe.setAttribute("allowTransparency", "true");
iframe.setAttribute("id", "chat-iframe");
player[0].appendChild(iframe);

iframe.onload = loadedIframe
var iframeContent

var cssPlayer = getCSS("player.css")
var cssChat = getCSS("chat.css")

function loadedIframe() {
  iframeContent = iframe.contentDocument
  iframeContent.getElementsByTagName('html')[0].setAttribute("dark", "");
  // console.log(iframeContent.getElementsByTagName('yt-live-chat-message-renderer'))
  if (iframeContent.querySelector('.live-chat-unavailable') !== null || iframeContent.querySelector('#chat-messages') == null) {
    document.getElementById('chat-iframe').remove();
  }
  else {
    addSheet(cssChat, true);
    addSheet(cssPlayer, false);
    html5player = document.getElementsByClassName('html5-video-player')[0];

  }
}

function chatLayout(layout) {
  switch (layout) {
    case "fullscreen":
      chatPosition(true)
      var classlist = html5player.classList;
      if(classlist.contains('tranq-player-right')) {
        classlist.toggle('tranq-player-right');
      }
      iframe.className = 'tranq-fullscreen'
      show();
      break;
    case "right":
      chatPosition(false)
      html5player.classList.toggle('tranq-player-right');
      iframe.className = 'tranq-chatright'
      show(true);
      break;
    case "hide":
      iframe.classList.toggle('tranq-chathidden');
      show();
      break;
  }
}

function chatPosition(inside) {
  hide();
  if(inside) {
    html5player.appendChild(iframe);
  }
  else {

    document.getElementById('player').appendChild(iframe)
    document.getElementById('player').appendChild(html5player)
  }
}

function addSheet(css, iframe) {
  var style = document.createElement("style");
  style.type = 'text/css';
  style.setAttribute("name", css[1].split('.')[0]);
  style.appendChild(document.createTextNode(css[0]));

  var target = iframe ? iframeContent : document;
  target.getElementsByTagName("head")[0].appendChild(style)
  console.log(css[1].split('.')[0])
}

function getCSS(css) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', "https://raw.githubusercontent.com/rudamaia/tranqStyles/master/css/" + css, false);
  xmlhttp.send();
  return [xmlhttp.responseText, css]
}

function show(chatright) {
  setTimeout(function() {
    var ifc = iframeContent.getElementsByTagName('html')[0];
    iframe.style.visibility = 'visible';
    iframe.style.opacity = '1';
    if(chatright) {
      ifc.setAttribute("class", "tranq-chat-right");
    }
    else {
      if(ifc.getAttribute('class')) {
        ifc.removeAttribute("class");
      }
    }
  }, 3000);

}
function hide() {
  iframe.style.visibility = 'hidden'
  iframe.style.opacity = '0'
}

// stringfy the JS https://www.freeformatter.com/javascript-escape.html#ad-output
