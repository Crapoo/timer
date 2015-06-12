repTimer = false, breakTimer = false;
reps = 0, breaks = 0;

Template.timerForm.helpers({
	started: function() {
		return Session.get('started');
	}
});

Template.timerForm.events({
	'submit #timerForm': function(event) {
		event.preventDefault();
		if (!Session.get('started') || Session.get('paused')) {
			Session.set('started', true);
			Session.set('paused', false);
			Session.set('reps', event.target.reps.value);
			Session.set('breaks', event.target.breaks.value);
			Session.set('maxRound', event.target.rounds.value);
			Session.set('actualRound', 1);
			$("#startstop").removeClass("green").removeClass("orange").addClass("red").text("Stop");
			$("#pause > span").text("Pause");
			timerRep();
		} else {
			Session.set('started', false);
			if (repTimer)
				clearInterval(reps);
			if (breakTimer)
				clearInterval(breaks);
			$("#startstop").removeClass("red").removeClass("orange").addClass("green").text("Start");
		}
	},
	'click #pause': function(event) {
		if (Session.get('paused')) {
			Session.set('paused', false);
			$("#pause > span").text("Pause");
			timerRep();
		} else {
			Session.set('paused', true);
			$("#pause > span").text("Unpause");
			if (repTimer)
				clearInterval(reps);
			if (breakTimer)
				clearInterval(breaks);
			$("#startstop").removeClass("red").removeClass("orange").addClass("orange").text("Restart");
		}
	}
});