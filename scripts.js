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

function Idea(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.quality = quality || 'swill';
}


Idea.prototype.qualityUp = function() {
  var upQuality = {'swill':'plausible', 'plausible': 'genius', 'genius': 'genius'};
  //when quality up button is clicked, look at position of quality in array
  //and move by one in the array
  this.quality = upQuality[this.quality];

};

Idea.prototype.qualityDown = function() {
  var qualities = ['swill', 'plausible', 'genius'];
  //when quality down button is clicked, look at position in the array
  //move down by 1 if in position 1 or 2 in the array
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
    $('.list-container').prepend('<div class="list-item' + " " + idea.id + '"><li class="title-style"><input value=' + idea.title + '><img src="icons/delete.svg" height="20" width="20"></li><li class="body-style"><input value=' + idea.body + '></li><img src="icons/downvote.svg" height="20" width="20"><img src="icons/upvote.svg" height="20" width="20"><p class="quality">quality: </p>');
  },

  renderStorage: function() {
    debugger;
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
