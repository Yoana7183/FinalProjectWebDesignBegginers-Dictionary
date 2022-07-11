// Small plugin to return html content of the element
// wrap around with anonymous function to ensure that can plugin can be used either with jQuery or $ sign.

(function ($) {
    $.fn.putExclamation = function () {

        // for each to be executed on more than one element(s)
        // when referes to tag name - i.e. for all div element
        return this.each(function () {
            let my_element = $(this);
            my_element.html(my_element.html() + "&#x21;&#x21;&#x21;");
            my_element.addClass('wrn');
        });
    };
})(jQuery)