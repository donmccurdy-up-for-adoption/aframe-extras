/**
 * __init.test.js is run before every test case.
 */
window.debug = true;

var AScene = require('aframe').AScene;
require('../');

setup(function () {
  this.sinon = sinon.sandbox.create();
  // Stubs to not create a WebGL context since Travis CI runs headless.
  this.sinon.stub(AScene.prototype, 'render');
  this.sinon.stub(AScene.prototype, 'resize');
  this.sinon.stub(AScene.prototype, 'setupRenderer');
});

teardown(function () {
  // Clean up any attached elements.
  ['canvas', 'a-assets', 'a-scene'].forEach((tagName) => {
    const els = document.querySelectorAll(tagName);
    for (let i = 0; i < els.length; i++) {
      els[i].parentNode.removeChild(els[i]);
    }
  });
  this.sinon.restore();
});
