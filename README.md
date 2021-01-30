# My first react app

# Plan

Goal for the project was to get to know react and create a distraction free way to browse bass related videos from youtube

# !!
Project APIs are no longer valid due to security reasons so the project can't be tested without changing the api confifuration for your self.

# Uses Youtube Data API to fetch videos and playlists of Bassist youtubers

## Channels page
* Select a youtuber to view general data about the channel
![Alt text](./bass-app-screenshots/channels.png?raw=true "Channels")

* Press view latest videos to display the videos
![Alt text](./bass-app-screenshots/latest.png?raw=true "Latest")

* Press view playlist to display all playlists the channel has
  * Choosing a playlist opens a -latest videos like- page where you can view videos of your choice
![Alt text](./bass-app-screenshots/playlists.png?raw=true "Playlists")

* Press visit channel to go visit in youtube





## Video of the Day
Searches yotube with bass guitar related keywords and returns the latest upload to be watched in an iframe
![Alt text](./bass-app-screenshots/videoftheday.png?raw=true "Video of the Day")

## Login page 
### FirebaseUI Auth
Tested out firebase authentication to require login to be able to use navigation.
![Alt text](./bass-app-screenshots/signin.png?raw=true "Signin")
![Alt text](./bass-app-screenshots/loggedin.png?raw=true "Login")

# Final thoughts

With little to no prior experience with react this turned out to be quite a lot of work, but regardless I did learn a lot. This lacks a backend that final idea should absolutely have and the firebase addition didn't help that much with learning react. After learning the fundamentals better, I plan to update or recreate this app with authenticating users with youtube accounts to be able create a custom playlist and also adding a backend better work with the api calls.


### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

