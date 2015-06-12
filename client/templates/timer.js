Template.timer.helpers({
  minutes: function () {
    return ("0" + Session.get('minutes')).slice(-2);
  },
  seconds: function() {
    return ("0" + Session.get('seconds')).slice(-2);
  },
  actualRound: function() {
    return Session.get('actualRound');
  },
  maxRound: function() {
    return Session.get('maxRound');
  }
});