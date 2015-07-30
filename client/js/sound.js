getMediaUrl = function(sound) {
	return cordova.file.applicationDirectory.replace('file://', '') + 'www/application/' + sound.substr(1);
};

loadSound = function(path) {
	if (Meteor.isCordova) {
		$(function() {
			document.addEventListener("deviceready",onDeviceReady,false);
		});
		function onDeviceReady() {
			return new Media(getMediaUrl(path));
		}
	} else {
		return new Audio(path);
	}
};