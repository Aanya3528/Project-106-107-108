function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MbNODJRww/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_label").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;

    img = document.getElementById('image');

    if (results[0].label == "Barking") {
      document.getElementById('image').src = 'Dog.gif';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      document.getElementById('image').src = 'Cat.gif';
      cat = cat + 1;
    } else{
      document.getElementById('image').src = 'Headphones.gif';
    }
  }
}