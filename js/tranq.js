var player = document.getElementsByClassName('ytp-embed');
var cssPlayer = getCSS("player.css")
var cssChat = getCSS("chat.css")

iframe = setiFrame()
player[0].appendChild(iframe);

function loadedIframe() {
  // initiate vars


  var iframe = returniFrame();
  iframeContent = iframe.contentDocument

  iframeContent.getElementsByTagName('html')[0].setAttribute("dark", "");

  if (iframeContent.querySelector('.live-chat-unavailable') !== null || iframeContent.querySelector('#chat-messages') == null) {
    iframe.remove();
  }
  else {
    addSheet(cssChat, true);
    addSheet(cssPlayer, false);
  }
}

function chatLayout(layout) {
  // initiate vars
  var html5player = returnHTML5player() ;
  var iframe = returniFrame();

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
  // initiate vars
  var html5player = returnHTML5player() ;
  var iframe = returniFrame();
  var player = document.getElementById('player');

  hide();
  if(inside) {
    html5player.appendChild(iframe);
  }
  else {
    player.appendChild(iframe)
    player.appendChild(html5player)
  }
}

function addSheet(css, isiframe) {
  // initiate vars
  var iframe = returniFrame();
  var iframeContent = iframe.contentDocument;
  var style = document.createElement("style");

  style.type = 'text/css';
  style.setAttribute("name", css[1].split('.')[0]);
  style.appendChild(document.createTextNode(css[0]));

  var target = isiframe ? iframeContent : document;
  target.getElementsByTagName("head")[0].appendChild(style)
}

function getCSS(css) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', "https://raw.githubusercontent.com/rudamaia/tranqStyles/master/css/" + css, false);
  xmlhttp.send();
  return [xmlhttp.responseText, css]
}

function show(chatright) {
  // initiate vars
  var iframe = returniFrame();
  var iframeContent = iframe.contentDocument;
  var ifc = iframeContent.getElementsByTagName('html')[0];

  setTimeout(function() {
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
  // initiate vars
  var iframe = returniFrame();

  iframe.style.visibility = 'hidden'
  iframe.style.opacity = '0'
}

function setiFrame() {
  var iframe = document.createElement('iframe');

  iframe.src = "https://www.youtube.com/live_chat?v=_gDysWhXtwQ";
  iframe.style.border = 0;
  iframe.setAttribute("allowTransparency", "true");
  iframe.setAttribute("id", "chat-iframe");
  iframe.onload = loadedIframe

  return iframe
}

function returniFrame() {
  return document.getElementById('chat-iframe');
}

function returnHTML5player() {
  return document.getElementsByClassName('html5-video-player')[0]
}

function test(mode) {
  switch (mode) {
    case 1:
      return window.webkit.getElementById('chat-iframe')
      break;
    case 2:
      return document.getElementById('chat-iframe')
      break;
    case 3:
      return window.document.getElementById('chat-iframe')
      break;
  }
}

// stringfy the JS https://www.freeformatter.com/javascript-escape.html#ad-output
