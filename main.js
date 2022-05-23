var cat = 0;
var dog = 0;
var elphant = 0;
var tiger = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xWxWj7WIr/',modelready);
}



function modelready(){
    classifier.classify(gotResults);
}


function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*+255) + 1;
        random_number_g = Math.floor(Math.random()*+255) + 1;
        random_number_b = Math.floor(Math.random()*+255) + 1;

        document.getElementById("detected").innerHTML = "Detected cat = "+cat+"Detected dog = "+dog+"Detected elephant = "+elephant+"Detected tiger = "+tiger;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHTML ="Detected voice of - "+results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking"){
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
        dog = dog + 1;
        }

        else if(results[0].label == "Meowing"){
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
        cat = cat + 1;
        }

        else if(results[0].label == "Trumpeting"){
        img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Felephant-sticker&psig=AOvVaw34ZSSR7fDMZZiuM1XoSIEj&ust=1653413915056000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMiS_vuU9vcCFQAAAAAdAAAAABAD";
        elephant = elephant + 1;
        }

        else if(results[0].label == "Roar"){
        img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fanimated-lion-gifs&psig=AOvVaw1AnleeSz-z8hqXA1XZ-2fH&ust=1653413613077000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCLiCye2T9vcCFQAAAAAdAAAAABBh";
        dog = dog + 1;
        }
        
    }
}