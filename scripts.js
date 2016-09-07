$('.save-button').on('click', function(){
  var title = $('.title').val();
  var body = $('.body').val();
  prependIdeaToList(title, body);
  store();
});

function getUserInput(){
  $('.title').val();
  $('.body').val();
}

function store() {
  var title = $('.title').val();
  var body = $('.body').val();
  var stringedTitle = JSON.stringify(title);
  var stringedBody = JSON.stringify(body);
  localStorage.setItem('title', stringedTitle);
  localStorage.setItem('body', stringedBody);
}

function prependIdeaToList(title, body) {
  $('.list-container').prepend('<div class="list-item"><li class="title-style">' + title + '<img src="icons/delete.svg" height="20" width="20"></li><li class="body-style">' + body + '</li>');
}



// function Idea(title, body, id, quality) {
//   var title =  $('.title').val();
//   var body = $('.body').val();
//   this.title = title;
//   this.body = body;
//   this.id = Date.now();
//   this.quality = quality;
// }
