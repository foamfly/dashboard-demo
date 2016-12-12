(function (global) {

var dc = {};

var homeHtml = "dashBoard.html";
var calendarHtml = "calendar.html";
var tableEdHtml = "tableEd.html";
var tableMHtml = "tableM.html";
// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'></<div>";
  html += "<img src='image/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading(".page-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector(".page-content")
      .innerHTML = responseText;
  },
  false);
});

//load calender
// dc.loadCalendar = function() {
//   showLoading('.page-content');
//   $ajaxUtils.sendGetRequest(
//     calendarHtml,
//     function(responseText){
//       document.querySelector(".page-content")
//         .innerHTML = responseText;
//     },
//     false);
// }

// //load editable table
// dc.loadTableEd = function() {
//   showLoading('.page-content');
//   $ajaxUtils.sendGetRequest(
//     tableEdHtml,
//     function(responseText){
//       document.querySelector(".page-content")
//         .innerHTML = responseText;
//     },
//     false);
// }

// //load editable table
// dc.loadTableM = function() {
//   showLoading('.page-content');
//   $ajaxUtils.sendGetRequest(
//     tableMHtml,
//     function(responseText){
//       document.querySelector(".page-content")
//         .innerHTML = responseText;
//     },
//     false);
// }
global.$dc = dc;

})(window);