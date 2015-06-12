#Workout Timer
Timer used primarily for workouts, where you have a defined time for the exercise and another defined time for breaks between reps.

##How to use
###Online
You can find a working demo at [workout-timer.meteor.com](workout-timer.meteor.com), even though it's rather intended for use on an Android device.

###Locally
Download the repo

```
	git clone https://github.com/Crapoo/timer.git
```

Download Meteor and install meteor from [here](https://www.meteor.com/install), or if you are using Linux or OSX : 

```
	curl https://install.meteor.com/ | sh
```

Launch the timer


```
	cd timer
	meteor
```
Once done, launch your browser and navigate to **localhost:3000**

###On Android
When in the timer directory

```
	meteor build build_directory --server localhost
```
where build_directory is the directory in which the build files will be located.

This will give you a file called **unaligned.apk** which you can then transfer to your Android phone and try the app.

##About the code
The code is probably not the best nor is it written as well as it could be and the app still contain some bugs. This was mainly made for my sister's rope jumping workout. 

I'm still working on it every now and then. If you're using it, feel free to tell me what you'd like to see in it. If you can make it better, feel free to tell me, I'm always looking for constructive criticism!
