(function (win) {
  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };

  var speakWord = "Good Bye";

  win.byeSpeaker = byeSpeaker;

})(window);