
var images = ['download.jpeg', 'e15b1adb6beb51ba266ac9a043b4b271.jpg'];
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
    var textNode = document.createTextNode('hello my name is amisha . i like food. but these days i llike chocolate. i am the best .');
  
    newParagraph.appendChild(textNode);
    container.appendChild(newParagraph);
  }

  const myButton = document.getElementById("my-button");
      const myText = document.getElementById("my-text");

      myButton.addEventListener("click", function() {
        myText.innerText = "bye i dont care ";
      })


      function addImage() {
    
        var image = document.createElement("img");
        image.src = "download (1).jpeg";
        document.getElementById("imageContainer").appendChild(image);

      }


 
