// Small plugin to return html content of the element
// wrap around with anonymous function to ensure that can plugin can be used either with jQuery or $ sign.

(function ($) {
    $.fn.setPlaceholder = function (options) {

        // initial plugin default parameteres
        var default_values = {
            defaultValue: "Enter your text here"
        };

        // merge object with default settings into final object
        var settings = $.extend({}, default_values, options);

        // for each to be executed on more than one element(s)
        // when referes to tag name - i.e. for all div element
        return this.each(function () {
            let my_element = $(this);

            if (my_element.is('input') && !my_element.attr('placeholder')) {
                // use default settings
                my_element.attr('placeholder', settings.defaultValue);
            }

        });
    };
})(jQuery)