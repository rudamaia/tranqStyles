var cssChat = getCSS("ytpages.css")
addSheet(cssChat)
clickOverrider()

// CSS functions
function addSheet(css) {
  // initiate vars
  var style = document.createElement("style")

  style.type = 'text/css'
  style.setAttribute("name", css[1].split('.')[0])
  style.appendChild(document.createTextNode(css[0]))

  document.getElementsByTagName("head")[0].appendChild(style)
}

function getCSS(css) {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', "https://raw.githubusercontent.com/rudamaia/tranqStyles/master/css/" + css, false)
  xmlhttp.send()
  return [xmlhttp.responseText, css]
}

// Click functions
function clickOverrider() {
  // Video link
  var videoLinkSubscription = document.querySelectorAll(".large-media-item-metadata")
  var videoLinkHistory = document.querySelectorAll(".compact-media-item-metadata-content")
  var videoLink = videoLinkSubscription.length > 0 ? videoLinkSubscription : videoLinkHistory
  // Video parent element
  var parenterSubscription = document.querySelectorAll("ytm-item-section-renderer")
  var parenter = parenterSubscription.length > 0 ? "ytm-item-section-renderer" : "ytm-compact-video-renderer"

  // Iterate trought itens to apply click event
  for (var i = 0; i < videoLink.length; i++) {
    videoLink[i].closest(parenter).addEventListener('click', clickOverride, false)
  }
}

function clickOverride(e) {
  var targetSubscription = e.target.querySelectorAll(".large-media-item-metadata")
  var targetSubscription = e.target.querySelectorAll(".compact-media-item-metadata-content")
  var target = targetSubscription.length > 0 ? targetSubscription : targetSubscription
  var href = target[0].getAttribute("href")
  copyStringToClipboard(href)
}

// Copy to clipboard
function copyStringToClipboard (str) {
   // Create new element
   var el = document.createElement('textarea')
   // Set value (string to be copied)
   el.value = str
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '')
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el)
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy')
   // Remove temporary element
   document.body.removeChild(el)
}

// Ajax for video paging
var open = XMLHttpRequest.prototype.open,
  send = XMLHttpRequest.prototype.send;

function openReplacement(method, url, async, user, password) {
  this._url = url
  return open.apply(this, arguments)
}

function sendReplacement(data) {
  if(this.onreadystatechange) {
    this._onreadystatechange = this.onreadystatechange
  }

  this.onreadystatechange = onReadyStateChangeReplacement
  return send.apply(this, arguments)
}

function onReadyStateChangeReplacement() {
   if(this.readyState == 4) {
     setTimeout(function(){ clickOverrider(); }, 500)
   }

  if(this._onreadystatechange) {
    return this._onreadystatechange.apply(this, arguments)
  }
}

XMLHttpRequest.prototype.open = openReplacement
XMLHttpRequest.prototype.send = sendReplacement
