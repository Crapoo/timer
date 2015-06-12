if (Meteor.isClient) {
  Session.setDefault('minutes', 00);
  Session.setDefault('seconds', 00);
  Session.setDefault('breaks', 0);
  Session.setDefault('breaks', 0);
  Session.setDefault('actualRound', '-');
  Session.setDefault('maxRound', '-');
  Session.setDefault('started', false);
  Session.setDefault('paused', false);

  beep = null;
  beepEnd = null;

  beep = loadSound("/sounds/beep.wav");
  beepEnd = loadSound("/sounds/beepEnd.wav");
}

