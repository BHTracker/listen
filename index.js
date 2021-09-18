/*
 * Create an anchor to some inline data...
 */

var url = 'data:application/octet-stream,Testing%20one%20two%20three';
var anchor = document.createElement('a');
    anchor.setAttribute('href', url);
    anchor.setAttribute('download', 'myNote.txt');

/*
 * Click the anchor
 */

// Chrome can do anchor.click(), but let's do something that Firefox can handle too

// Create event
var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

// Fire event
anchor.dispatchEvent(ev);
