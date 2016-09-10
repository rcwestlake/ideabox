$(document).ready(function(){
  AllIdeas.retrieve();
  AllIdeas.renderStorage();
});

$('.save-button').on('click', function(){
  var title = $('.title').val();
  var body = $('.body').val();
  var idea = new Idea(title, body);
  AllIdeas.addStoreToArray(idea);
  AllIdeas.retrieve();
  AllIdeas.render(idea);
  // AllIdeas.renderStorage();
});

$('.list-container').on('click', '.downvote', function(){
  var id = $(this).parents('.list-item').attr('id');
  // var title = $('.title').val();
  // var body = $('.body').val();
  // var idea = new Idea(title, body, id);
  AllIdeas.find(id).qualityDown();
  // AllIdeas.addStoreToArray();
  // AllIdeas.clearListContainer();
  // AllIdeas.renderStorage();
});

$('.list-container').on('click', '.upvote', function(){
  var id = $(this).parents('.list-item').attr('id');
  // var title = $('.title').val();
  // var body = $('.body').val();
  // var idea = new Idea(title, body);
  AllIdeas.find(id).qualityUp();
  // AllIdeas.addStoreToArray();
  // AllIdeas.clearListContainer();
  // AllIdeas.rendexrStorage();
});


function Idea(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.quality = quality || 'swill';
}

Idea.prototype.qualityUp = function () {
  var quality = this.quality;
  switch (quality) {
    case 'swill':
      this.quality = 'plausible';
      return $('.quality-value').text(this.quality);
    case 'plausible':
      this.quality = 'genius';
      return $('.quality-value').text(this.quality);
    default:
  }
  AllIdeas.store();
};

Idea.prototype.qualityDown = function() {
  var quality = this.quality;
  switch (quality) {
    case 'genius':
      this.quality = 'plausible';
      return $('.quality-value').text(this.quality);
    case 'plausible':
      this.quality = 'swill';
      return $('.quality-value').text(this.quality);
    default:
  }
  AllIdeas.store();
};

var ideasArray = [];

var AllIdeas = {

  addStoreToArray: function(idea){
    ideasArray.push(idea);
    this.store();
    console.log(ideasArray);
    console.log(idea.title);
  },

  store: function () {
    localStorage.setItem('ideasArray', JSON.stringify(ideasArray));
  },

  render: function(idea) {
    $('.list-container').prepend('<div class="list-item"' + 'id="' + idea.id + '"><li class="title-style"><input value=' + idea.title + '><img src="icons/delete.svg" height="20" width="20"></li><li class="body-style"><input value=' + idea.body + '></li><img class="downvote" src="icons/downvote.svg" height="20" width="20"><img class="upvote" src="icons/upvote.svg" height="20" width="20"><p class="quality">quality: ' + '<span class="quality-value">' + idea.quality + '</span>' + '</p></div>');
  },

  renderStorage: function() {
    //before we use ideasArray, check localStorage and make sure ideasArray matches
    for (var i = 0; i < ideasArray.length; i++) {
     //iterate through the ideasArray array.
        //identify the individual titles, body, id, buttons, and quality for each object
        //prepend to the page in the right order
        var object = ideasArray[i];
        var idea = new Idea(object.title, object.body, object.id, object.quality);
        ideasArray[i] = idea;
      this.render(idea);
    }
  },

  retrieve: function(title, body){
    if (localStorage.ideasArray) {
      var retrievedArray = localStorage.getItem('ideasArray');
      ideasArray = JSON.parse(retrievedArray);
    }
  },

  clearListContainer: function() {
    $('.list-item').empty();
  },

  find: function(id) {
    id = parseInt(id);
    return ideasArray.find(function (idea) {
      return idea.id === id;
    });
  },

  remove: function() {}



};
