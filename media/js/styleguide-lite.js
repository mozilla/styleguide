(function() {
    var documentElement = document.documentElement;
    var $nav = $('.sg-nav-main');
    var $nestedLists = $('ul', $nav);
    var $accordionHeaders = $('.moz-accordion-header', $nav);

    // Add class to reflect javascript availability for CSS
    documentElement.className = documentElement.className.replace(/\bno-js\b/, 'js');
    // Hide all ul elements under the nav
    $nestedLists.addClass('hidden').attr('aria-hidden', true);
    // set aria-expanded to false on all accordion headers
    $accordionHeaders.attr('aria-expanded', false);

    // only handle clicks where the target is an link with a hash target
    $accordionHeaders.on('click', 'a[href^="#"]', function(event) {
        var $this = $(this);
        // get the ul nested inside this list item
        var $nestedList = $(this.nextElementSibling);
        event.preventDefault();

        // first lets ensure all the nested list are hidden
        $nestedLists.addClass('hidden').attr('aria-hidden', true);
        // also ensure aria-expanded is set to false on all accordion headers
        $accordionHeaders.attr('aria-expanded', false);

        // show the targeted list
        $nestedList.removeClass('hidden').attr('aria-hidden', false);
        // set the current header to true
        $this.parents('li').attr('aria-expanded', true);
    });

    Prism.highlightAll();
})();
