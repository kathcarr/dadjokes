function generateJoke() {
  var request = new XMLHttpRequest();
  request.open('GET','https://icanhazdadjoke.com/slack', true);
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200){
      var text = request.responseText;
      var jsonText = JSON.parse(text);
      //var attachments = jsonText.attachments
      var fallback =jsonText.attachments[0]
      joke = fallback.text
      //console.log(attachments)

      /*var inter = attachments.0
      var joke = inter.fallback
      console.log(joke)*/

      //var jsonText = JSON.parse(text);
      //var joke = jsonText.joke;
      document.getElementById('joke').innerHTML = joke;
      //console.log(joke)
    }
  };
  request.send();
}
