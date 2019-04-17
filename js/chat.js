document.getElementsByTagName('html')[0].setAttribute("dark", "");
document.onload = onLoad

function onLoad() {
  document.getElementsByTagName('yt-live-chat-viewer-engagement-message-renderer')[0].remove()
}
