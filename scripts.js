$('.save-button').on('click', function(){
  var title =  $('.title').val();
  var body = $('.body').val();
  console.log(title, body);
});

function getUserInput(){
  $('.title').val();
  $('.body').val();
}

function Idea(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = quality;
}
