$(function(window, document, undefined) {

/**
 * Application
 */

function App() {
  this.os = this.detectOS();

  if (this.os) {
    $(".download-button").text('Download For ' + this.os);
  }

  this.addCodeBanners();
}

/**
 * Detect the current operating system and return the name.
 *
 * @return {String} The operating system name.
 */

App.prototype.detectOS = function() {
  var name=null;

  if (navigator.appVersion.indexOf("Win")!=-1) name="Windows";
  if (navigator.appVersion.indexOf("Mac")!=-1) name="Mac";
  if (navigator.appVersion.indexOf("X11")!=-1) name="UNIX";
  if (navigator.appVersion.indexOf("Linux")!=-1) name="Linux";

  return name;
};

/**
 * Add a `rust` banner for each code snippet.
 */

App.prototype.addCodeBanners = function() {

};

/**
 * Create a new `app` instance.
 */

window.app = new App();

}(window, document));