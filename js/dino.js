function Dino(){
}

Dino.prototype.output = function(para,word,displayOutput){
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=' + para + '&words=' + word).then(function(response){
    displayOutput(response);
  }).fail(function(error){
    $('#output').text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;
