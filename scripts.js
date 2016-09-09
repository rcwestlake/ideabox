$(document).ready(function(){
  AllIdeas.retrieve();
  AllIdeas.renderStorage();
});

$('.save-button').on('click', function(){
  var title = $('.title').val();
  var body = $('.body').val();
  var idea = new Idea(title, body);
  AllIdeas.addStoreToArray(idea);
  AllIdeas.render(idea);
  AllIdeas.retrieve();
});

$('.list-container').on('click', '.downvote', function(){
  Idea.prototype.qualityDown();
});

$('.list-container').on('click', '.upvote', function(){
  Idea.prototype.qualityUp();
});



function Idea(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.quality = quality || 'swill';
}

Idea.prototype.qualityUp = function() {
  var quality = $('.quality-value').text();
  if ($('.quality-value').text() === 'swill') {
      $('.quality-value').text('plausible');
      // quality = //fill this in;
  } else {
      $('.quality-value').text('genius');
  }
};

Idea.prototype.qualityDown = function() {
  if ($('.quality-value').text('genius')) {
     $('.quality-value').text('plausible');
  }
  if ($('.quality-value').text('plausible')) {
     $('.quality-value').text('swill');
  } else {
    return false;
  }
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
    $('.list-container').prepend('<div class="list-item' + " " + idea.id + '"><li class="title-style"><input value=' + idea.title + '><img src="icons/delete.svg" height="20" width="20"></li><li class="body-style"><input value=' + idea.body + '></li><img class="downvote" src="icons/downvote.svg" height="20" width="20"><img class="upvote" src="icons/upvote.svg" height="20" width="20"><p class="quality">quality: ' + '<span class="quality-value">' + idea.quality + '</span>' + '</p></div>');
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

  remove: function() {},
  find: function() {}


};
