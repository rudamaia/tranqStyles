var iframe = document.createElement('iframe');
var player = document.getElementsByClassName('ytp-embed');
var html5player = ""

//_gDysWhXtwQ
//sP6SaKn2WuM"
iframe.src = "https://www.youtube.com/live_chat?v=_gDysWhXtwQ";
iframe.className += '.tranq-chatBase'
addSheet("chat.css", true);
addSheet("player.css", false);
iframe.setAttribute("allowTransparency", "true");
iframe.setAttribute("id", "chat-iframe");
player[0].appendChild(iframe);


iframe.onload = loadedIframe
var iframeContent = iframe.contentDocument

function loadedIframe() {
  iframeContent.getElementsByTagName('html')[0].setAttribute("dark", "");
  // console.log(iframeContent.getElementsByTagName('yt-live-chat-message-renderer'))
  if (iframeContent.querySelector('.live-chat-unavailable') !== null || iframeContent.querySelector('#chat-messages') == null) {
    document.getElementById('chat-iframe').remove();
  }
  else {
    html5player = document.getElementsByClassName('html5-video-player')[0];
    iframe.style.visibility = 'visible'
    iframe.style.opacity = '1'
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
      break;
    case "right":
      chatPosition(false)
      html5player.classList.toggle('tranq-player-right');
      iframe.className = 'tranq-chatright'
      break;
    case "hide":
      iframe.classList.toggle('tranq-chathidden');
      break;
  }
}

function chatPosition(inside) {
  if(inside) {
    html5player.appendChild(iframe);
  }
  else {
    document.getElementById('player').appendChild(iframe)
  }
}

function addSheet(url, iframe) {
  var urlBase = "https://raw.githubusercontent.com/rudamaia/tranqStyles/master/css/"
  var style = document.createElement("link");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("type", "text/css");
  style.setAttribute("href", urlBase + url);
  var target = iframe ? iframeContent : document;
  target.getElementsByTagName("head")[0].appendChild(style)
}


// stringfy the JS https://www.freeformatter.com/javascript-escape.html#ad-output
