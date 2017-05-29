# styleguide

A style guide for Mozilla branded websites

## Getting started

Before talking about adding new content, or updating existing content, let's get the styleguide running on your local machine. First step is to fork the main repository. Once completed, proceed to clone your fork to your local machine.

``` bash
git clone git@github.com:yourusername/styleguide.git
```

Once this is complete, you need to install some dependecies. Change directory into your newly created project folder. Run the following command from your terminal.

NOTE: You will need Nodejs installed. If you do not have it already, head over to the
[Node.js](https://www.nodejs.org/) website, download, and run the installer.

``` bash
npm install
```

## Adding a new page

All content pages for the styleguide will reside in the `/styleguide` folder. These can be grouped
into sub-folders under the root `/styleguide` folder, and can be as deeply nested as you require.

To create a new page, create a new HTML file within one of the existing subdirectories or, create a
new one if needed. Use the following as your base template:

``` html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Styleguide Lite</title>
    #html-include=styleguide/includes/css.html
  </head>
  <body>
    <div id="outer-wrapper">
      <div id="wrapper">
        <h1 class="sg-site-title">Styleguide Lite</h1>
        #html-include=styleguide/includes/navigation.html
        <main class="sg-main-content" role="main" tabindex="-1">
          <h2>This is the landing page for now.</h2>
        </main>
      </div>
      #html-include=styleguide/includes/footer.html
    </div>
    #html-include=styleguide/includes/js.html
  </body>
</html>
```

If you have added a new page, you need to add a link to it in `includes/navigation.html`.

``` html
<li><a href="#html-include-link=/grid/index.html">Grid</a></li>
```

## Workflow

To make working on the styleguide as seamless as possible, there is a NPM script you should run that, starts a `watch` service against the `media` and `styleguide` folders, starts a local `http` server and opens you browser to the root of the project.

``` bash
npm start
```

NOTE: When the browser opens, it will show a directory listing of the folders in tour project, to preview the styleguide, click on the `dist` folder in the listing.

From here on, any changes you make to files inside the `media` and `styleguide` folder, will cause the `watch` process to call `build-local`, which will re-generate the site into the dist folder. Refreshing the page will immediately show your changes.

To stop the server, and watch service, simply press Ctrl + C in the terminal.

## Code examples

To add code samples to a page, you can simply follow the following template:

``` html
<section class="sample-container">
  <button class="button-green">download</button>
</section>

<section class="code-sample show">
    <h4>HTML</h4>
<pre>
<code class="language-markup">
&lt;a href="#" class="button-green">download&lt;/a>
</code>
</pre>
</section>
```

NOTE: You need to escape the opening brackets of any HTML element to avoid the code from being parsed and rendered. Also, there should be no unintentional indentation(white space) inside the `code` block, as this will be rendered. See `styleguide/buttons/index.html` for example usage.
