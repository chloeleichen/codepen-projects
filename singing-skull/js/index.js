//https://s3-us-west-2.amazonaws.com/s.cdpn.io/201181/sing.mp3
(function() {
  //prevent init more than once
  var instance = 0;
  var player = function() {
      var url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/201181/sing.mp3",
        song = new Audio(url),
        skull = document.getElementById("skull"),
        toggle = document.getElementById("toggle");

      function init() {
        if (instance == 0) {
          start();
        } else {
          return false;
        }
        instance++;
      }

      function start() {
/*        song.currentTime = 0;
        song.play();
        skull.classList.add("is-singing");
*/        song.addEventListener("ended", control);
        toggle.addEventListener("click", control);

      }

      function isPlaying(audio) {
        if (audio.duration > 0 && !audio.paused) {
          return true;
        } else {
          return false;
        }
      }

      function control(e) {
        //console.log(e.target);
        if (e.target === toggle) {
          //console.log(e);
          e.preventDefault();
          if (song.currentTime > 0 && !song.paused) {
            //console.log("should pause");
            song.pause();
            song.currentTime = 0;
          } else if (song.currentTime > 0 && song.paused) {
            song.play();
            //console.log("should play");
          } else {
            song.play();
            //console.log("should play2");
          }
        }
        //console.log(isPlaying(song));
        skull.classList.toggle("is-singing", isPlaying(song));
      }
      this.init = init;
      return this;
    }()
    .init();

})();