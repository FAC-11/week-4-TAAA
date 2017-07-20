# TAAA - Auto Complete

## WHY (describing the purpose)
Star Light Primary School are doing a hip new age rendition of the Nativity Play with dinosaurs. In an attempt to be scientifically factual with the naming of dinosaurs, Ms Dimbles wanted to be able to quickly check and select dinosaur names with various starting letters.
## WHAT (describing your site)
### User Stories
Ms Dimbles wants:
> to be able to type letters and be displayed with names of dinosaurs matching the letters she has typed

> to be able to use a screen reader to fill out and read out the autocomplete suggestions

>to be informed if there is no dinosaur names starting with her typed letters

### Stretch Goals
- [ ] User is given random autocomplete suggestions, rather than alphabetical
- [ ] Have a beautiful drop down menu rather than gross HTML defaults

## HOW (describing the journey to completion)

### Architecture
#### Drawing out our user experience
![](./Architecture.jpg)
We mapped out how our website would be constructed including what data types our functions would be taking as arguments and returning.

#### Separation of Concerns


| Front End | Back End |
| -------- | -------- |
| DOM related files - *index.html, main.css, dom.js*    | Server - *server.js and handlers.js serving our files for hosting on Heroku*    |
| Front End Logic - *??We created this file incase we would need it, but we thought probably not??*  | Back End Logic - *We decided to search for the string on our server to limit size of the data being transfered between the client and the server*     |
|    | Data Set - *Our JSON of dinosaur names*     |

### Data Storage and Retrival
We saved our data in a JSON file on the server.

### Server Showdown
For our server to be able to retrieve information from our client we...

### DOM Manipulation


### Useful Links
[](https://)
[](https://)
[](https://)
