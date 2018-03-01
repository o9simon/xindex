{{{appJS}}}

// This script is embedded in the footer of every page
var avatarElements = document.getElementsByClassName('avatar');
if (avatarElements.length > 0) {
  var avatarCount = 10;
  var random = Math.floor(Math.random() * avatarCount) + 1;
  avatarElements[0].setAttribute('src', '/_Avatars/' + random + '.png');
}
