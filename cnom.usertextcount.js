
/*! ===========================================================
 * Developed by cnom. 
 * A script library for custom user input interaction (validation etc). 
 * Requires jquery!
 * ========================================================== */

// Use DocumentReady event, to avoid false timing on js loaded!!!
$(document).ready(function () {

    // A function to display a count of characters of user input fields
    // the selector below will catch the keyup events of elements decorated with class textlimited and have a maxlength
    // it can be applied in <input type="text"> and <textarea> etc. 
    // It requires an extra <span> (or other text container) element decorated with class textcounter to display the count

    // example usage:
    /*!
    <textarea class="textlimited" data-textcounterid="counter1" maxlength="30">text</textarea>
    <span class='textcounter' id="counter1"></span>
    */
    $(".textlimited[maxlength]").keyup(function () {
        //get the fields limit
        var maxLength = $(this).attr("maxlength");

        // check if the limit is passed
        if (this.value.length > maxLength) {
            return false;
        }

        // find the counter element by the id specified in the source input element
        var counterElement = $(".textcounter#" + $(this).data("textcounterid"));
        // update counter 's text
        counterElement.html((maxLength - this.value.length) + " chars left");
    });
});

