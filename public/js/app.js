$(function(window, document, undefined) {

/**
 * Application
 */

function App() {
  this.os = this.detectOS();

  if (this.os) {
    $(".download-button").text('Download For ' + this.os);
  }

  this.version = { dropdown: { active: false }};

  this.addCodeBanners();
  this.versionDropdown();
}

/**
 * Detect the current operating system and return the name.
 *
 * @return {String} The operating system name.
 */

App.prototype.detectOS = function() {
  var name=null;

  if (navigator.appVersion.indexOf("Win") !=-1) name="Windows";
  if (navigator.appVersion.indexOf("Mac") !=-1) name="Mac";
  if (navigator.appVersion.indexOf("X11") !=-1) name="UNIX";
  if (navigator.appVersion.indexOf("Linux") !=-1) name="Linux";

  return name;
};

/**
 * Add a `rust` banner for each code snippet.
 */

App.prototype.addCodeBanners = function() {
  $(".highlight pre code").each(function(i, el) {
    $('<div class="banner">'
      + '<i class="fa fa-chevron-right"></i>'
      + '<span class="cmd">rustc</span>'
      + '<span class="text">hello_world.rs</span>'
      + '<span class="run">Run</span>'
      + '</div>').appendTo(el);
  });
  $(".highlight").addClass("has-banner");
};

/**
 * Version dropdown
 */

App.prototype.versionDropdown = function() {
  var self = this;

  $(".version-dropdown .value").click(function(event) {
    event.stopPropagation();

    if (self.version.dropdown.active) {
      $(".version-dropdown .dropdown").hide();
      self.version.dropdown.active = false;
      $(".version-dropdown i").removeClass("fa-angle-up");
      $(".version-dropdown i").addClass("fa-angle-down");
    } else {
      $(".version-dropdown .dropdown").show();
      self.version.dropdown.active = true;
      $(".version-dropdown i").removeClass("fa-angle-down");
      $(".version-dropdown i").addClass("fa-angle-up");
    }
  });

};

/**
 * Create a new `app` instance.
 */

window.app = new App();

}(window, document));