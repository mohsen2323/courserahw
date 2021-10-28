(function (win) {
  var helloSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };

  var speakWord = "Hello";

  win.helloSpeaker = helloSpeaker;
})(window);