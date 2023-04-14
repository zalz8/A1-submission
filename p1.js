
var images = ['picture4.jpg', 'picture2.jpg'];
var currentIndex = 0;
var imgElement = document.getElementById('myImage');

function changeImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  imgElement.src = images[currentIndex];
}

function addParagraph() {
    var container = document.getElementById('paragraph-container');
    var newParagraph = document.createElement('p');
    var textNode = document.createTextNode('hello my name is amisha . I am 19 years old. I am turning 20 in June. Fun facts about me are that firstly i like chocolate a lot, but someties i dont feel like eating it , i am not much of a chocolate person.I really like savory dishes. I cook for my roomates as well as my brother and my mother.I have my own business also so it gets really stressful sometimes managing my business and college work. .');
  
    newParagraph.appendChild(textNode);
    container.appendChild(newParagraph);
  }

  const myButton = document.getElementById("my-button");
      const myText = document.getElementById("my-text");

      myButton.addEventListener("click", function() {
        myText.innerText = "How are you doing today! ";
      })


      function addImage() {
    
        var image = document.createElement("img");
        image.src = "picture1.jpg";
        document.getElementById("imageContainer").appendChild(image);

      }


 
