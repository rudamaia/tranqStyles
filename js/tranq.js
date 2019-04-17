document.getElementsByTagName('html')[0].setAttribute("dark", "");
document.onload = onLoad

function onLoad() {
  if (document.querySelector('.live-chat-unavailable') !== null || document.querySelector('#chat-messages') == null) {
    return "chat unavailable'"
  }

}
