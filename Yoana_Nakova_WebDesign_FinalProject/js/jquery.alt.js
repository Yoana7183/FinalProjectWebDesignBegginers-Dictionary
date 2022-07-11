// Small plugin to return html content of the element
// wrap around with anonymous function to ensure that can plugin can be used either with jQuery or $ sign.

(function ($) {
    $.fn.setAlt = function () {

        // for each to be executed on more than one element(s)
        // when referes to tag name - i.e. for all div element
        return this.each(function () {
            let my_element = $(this);

            if (my_element.is('img') && !my_element.attr('alt')) {
                // use by default src attribute as alt if there is no alt provided
                let el_src = my_element.attr('src').split("/");
                my_element.attr('alt', el_src[el_src.length - 1]);
            }

        });
    };
})(jQuery)