(function() {
    var documentElement = document.documentElement;
    var $nav = $('.nav-main');
    var $nestedLists = $('ul', $nav);
    var $accordionHeaders = $('.moz-accordion-header', $nav);
    var $activeNavLink = $('a[href="' + window.location.href + '"]');

    // Add class to reflect javascript availability for CSS
    documentElement.className = documentElement.className.replace(/\bno-js\b/, 'js');
    // Hide all ul elements under the nav
    $nestedLists.addClass('hidden').attr('aria-hidden', true);
    // set aria-expanded to false on all accordion headers
    $accordionHeaders.attr('aria-expanded', false);

    /**
     * Marks the current link as active in the navigation.
     * Also expands the accordion if the active link is nested.
     */
    function setActiveLink() {
        // set the current page's navigation link item to active
        $activeNavLink.addClass('active');

        // if the active link has a moz-accordion-header parent, we need to expand it.
        var $accordionHeader = $activeNavLink.parents('.moz-accordion-header');
        if ($accordionHeader.length > -1) {
            var $activeNavLinkParent = $activeNavLink.parents('ul');

            $accordionHeader.attr('aria-expanded', true);
            $activeNavLinkParent.removeClass('hidden').attr('aria-hidden', false);
        }
    }

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

    setActiveLink();
    Prism.highlightAll();

})();
