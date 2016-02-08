$(function() {
    var location = window.location.pathname;
    var sectionsPath = 'styleguide/';
    var $container = $('#main-content');
    var menuBar = $('nav');
    var initialSegment = '';

    /**
     * When a page is not found, tell the user and encourage them to contribute.
     */
    function notFound() {
        // TODO: add a URL or something where people can learn more about contributing
        var $msg = $('<p />', {
            class: 'no-content-message',
            text: 'Not Found :( This page could not be found. I guess you need to create me. Thank you.'
        });

        $container.empty().append($msg);
    }

    /**
     * Super simple helper function to log errors to the console.
     */
    function logError(jqXHR, txtStatus, error) {
        console.log('jqXHR: ', jqXHR);
        console.log('txtStatus: ', txtStatus);
        console.log('error: ', error);
    }

    /**
     * If pushState is supported, add new URL to history
     */
    function setState(url) {
        if (typeof history.pushState == 'function') {
            // we do not need to associate anything with the previous URL so,
            // we just set it to null. The second parameter is ignored at the moment
            // so, setting it to something arbitrary, the last parameter is out new URL.
            // see https://developer.mozilla.org/en-US/docs/Web/API/History/pushState for more.
            history.pushState(null, 'Styleguide', location + '#' + url)
        }
    }

    /**
     * Finds all samples on the page, get's the innerHTML and injects this into
     * defined code blocks on the page.
     */
    function injectCodeSamples() {
        var $codeSampleContainers = $container.find('.sample-container');

        $codeSampleContainers.each(function() {
            var $currentContainer = $(this);
            var html = $currentContainer.html();

            $currentContainer.next('.code-sample').find('code').text(html);
        });

        Prism.highlightAll();
    }

    // determine initial page to load based on hash. If no hash, load default.
    if (window.location.hash) {
        initialSegment = window.location.hash.substr(1);
    } else {
        initialSegment = sectionsPath + 'index.html'
    }

    $.get(initialSegment, function(data) {

        $container.append(data);
        injectCodeSamples();

    }).fail(function(jqXHR, txtStatus, error) {

        if (error === 'File not found') {
            notFound();
            logError(jqXHR, txtStatus, error);
        } else {
            logError(jqXHR, txtStatus, error);
        }
    });

    /**
     * Attach an event to all anchor link clicks, get the relevant page content and inject
     * it into he main content container.
     */
    menuBar.on('click', 'a', function(event) {
        event.preventDefault();

        var fileName = $(this).attr('href');

        $.get(fileName, function(data) {

            $container.empty().append(data);
            setState(fileName);
            injectCodeSamples();

            $container.focus();

        }).fail(function(jqXHR, txtStatus, error) {

            if (error === 'File not found') {
                notFound();
                logError(jqXHR, txtStatus, error);
            } else {
                logError(jqXHR, txtStatus, error);
            }
        });

    });

});
