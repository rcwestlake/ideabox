$('.save-button').on('click', function(){
  var title = $('.title').val();
  var body = $('.body').val();
  createIdea(title, body);
  prependIdeaToList(Idea.title, Idea.body);
  AllIdeas.addToArray(title, body);
  AllIdeas.store();

});

function getUserInput(){
  $('.title').val();
  $('.body').val();
}



function prependIdeaToList(title, body) {
  $('.list-container').prepend('<div class="list-item" class=' + Idea.id + '><li class="title-style">' + Idea.title + '<img src="icons/delete.svg" height="20" width="20"></li><li class="body-style">' + Idea.body + '</li><img src="icons/downvote.svg" height="20" width="20"><img src="icons/upvote.svg" height="20" width="20"><p class="quality">quality: </p>');
}

function Idea(title, body) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = 'swill';
}

function createIdea(title, body) {
  var idea  = new Idea(title, body);
  console.log(idea);
  debugger;
}


var AllIdeas = {
  ideasArray: [],

  store: function () {
    localStorage.setItem('ideasArray', JSON.stringify(this.ideasArray));
  },

  addToArray: function(title, body){
    this.ideasArray.push(new Idea(title, body));
  }


};
