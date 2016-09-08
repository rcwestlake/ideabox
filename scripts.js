
$('.save-button').on('click', function(){
  var title = $('.title').val();
  var body = $('.body').val();
  createIdea(title, body);
  AllIdeas.render(title, body);
  AllIdeas.addToArray(title, body);
  AllIdeas.store();

});

function getUserInput(){
  $('.title').val();
  $('.body').val();
}


function Idea(title, body, id = Date.now()) {
  this.title = title;
  this.body = body;
  this.id = id;
  this.quality = 'swill';
}

function createIdea(title, body) {
  var idea  = new Idea(title, body);
  console.log(idea);
}


var AllIdeas = {
  ideasArray: [],

  addToArray: function(title, body){
    this.ideasArray.push(new Idea(title, body));
    console.log(title);
  },

  store: function () {
    localStorage.setItem('ideasArray', JSON.stringify(this.ideasArray));
  },

  render: function(title, body, id) {
    $('.list-container').prepend('<div class="list-item' + " " + id + '"><li class="title-style">' + title + '<img src="icons/delete.svg" height="20" width="20"></li><li class="body-style">' + body + '</li><img src="icons/downvote.svg" height="20" width="20"><img src="icons/upvote.svg" height="20" width="20"><p class="quality">quality: </p>');
  }

};
