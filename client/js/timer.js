timerRep = function () {
  repTimer = true;
  var repeat = 0;
  Session.set('seconds', 0);
  Session.set('minutes', 0);
  reps = setInterval(function(){
    Session.set('seconds', Session.get('seconds') + 1);
    ++repeat;
    if (repeat % 60 === 0) {
      Session.set('seconds', 0);
      Session.set('minutes', Session.get('minutes') + 1);
    }
    if (repeat == Session.get('reps')){
      repTimer = false;
      if (Session.get('actualRound') != Session.get("maxRound")) {
        beep.play();
        clearInterval(reps);
        timerBreak();
      } else {
        beepEnd.play();
        Session.set('started', false);
        $("#startstop").removeClass("red").addClass("green").text("Start");
      }
      clearInterval(reps);
    }
  }, 1000);
};

timerBreak = function () {
  breakTimer = true;
  var repeat = 0;
  Session.set('seconds', 0);
  Session.set('minutes', 0);
  breaks = setInterval(function(){
    Session.set('seconds', Session.get('seconds') + 1);
    ++repeat;
    if (repeat % 60 === 0) {
      Session.set('seconds', 0);
      Session.set('minutes', Session.get('minutes') + 1);
    }
    if (repeat == Session.get('breaks')) {
      breakTimer = false;
      beep.play();
      clearInterval(breaks);
      Session.set('actualRound', Session.get('actualRound') + 1);
      timerRep();
    }
  }, 1000);
};