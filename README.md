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
- [ ] User is given suggestions which are selected according to some logic, rather than alphabetical
- [ ] Have a beautiful drop down menu rather than gross HTML defaults
- [ ] Use a halving search, to speed processing time on very large, ordered datasets such as dictionaries.

## HOW (describing the journey to completion)

### Architecture
#### Drawing out our user experience
![](./Architecture.jpg)
We mapped out how our website would be constructed including what data types our functions would be taking as arguments and returning.

#### Separation of Concerns


| Front End | Back End |
| -------- | -------- |
| DOM related files - *index.html, main.css, dom.js*    | Server - *`server.js` creates the server and sets it listening. This file contains the port setup.*  |
| |*`handlers.js` contains the routing logic for the server. It contains the whitelist of files to serve. Responses will consist of the requested file from the whitelist, 404 or, if the portion of the request after the domain begins `/API`, ie represents a change in the autocomplete textbox, then the request is routed to `api.js`*|
| |Back End Logic - * In `api.js` we search for the string and return a pared-down array of possible results, to be processed by client side JS*     |
|    | Data Set - *Our JSON of dinosaur names*     |

### Data Storage and Retrival
We store our autocomplete data in a JSON file on the server. We use `require` to access it as it returns an object- where a resource `require`d is a .json file, then its JSON object is loaded and useable at the time the `require` method is used. Which saves on code for file access. Nice :)


### API transport considerations


We put thought into the most efficient means of client/ server exchange of data over various protocols, as a full API request and response will made after every keypress.

Arrays are a space-efficient means of storing the word data, and the transmission overhead of an array stringifed as a JSON object is minimal.

We also considered various means other than HTTP requests for quickly exchanging client/ server data.

The problem with **HTTP** `GET` and `POST` requests in this application is that for each keypress, one byte is sent to the server by generating a full HTTP request, which will be at least 200 bytes and can be far more (depending on how the browser implements requests).

The modern alternative is **websockets**, which opens a session with a single handshake using HTTP headers. The session is then open for continuous communication.  Unfortunately, websockets are only supported in the most recent browsers.
![](./caniuse_websockets.png)

**Raw sockets** on a lower network layer (eg over TCP) are the most efficient way to transport small, regular chunks of data, especially where lost packets are not important.
They avoid the use of headers, and are supported by node's `net` module, but are not native to browsers, so require the user to have plugins installed.

Other techniques such as the **long poll** are available, but hacky.

In the final analysis, an overhead of 200 to 600 bytes per keypress is a waste, but acceptable on a reasonable connection. However, any site with autocomplete functionality like this will need a fallback for mobile data and poor connections.

### DOM Manipulation
Every textbox change causes a `GET` request and the callback attached to the request passes the response (an array) to `AppendAList()`. This function removes any previous results list and replaces it with a new `<ul>` of styled buttons.

### Useful Links
[](https://)
[](https://)
[](https://)
