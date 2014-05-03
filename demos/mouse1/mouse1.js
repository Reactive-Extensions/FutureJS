(function () {

  function extractClientX(e) { return e.clientX; }
  function extractClientY(e) { return e.clientY; }
  function setLeft(x) { this.style.left = x + 'px'; }
  function setTop(y) { this.style.top = y + 'px'; }

  var delay = 300;

  var mousemove = Rx.Observable.fromEvent(document, 'mousemove');
  var left = mousemove.map(extractClientX);
  var top = mousemove.map(extractClientY);

  // Update the mouse
  var themouse = document.querySelector('#themouse');
  left.subscribe(setLeft.bind(themouse));
  top.subscribe(setTop.bind(themouse));

}());