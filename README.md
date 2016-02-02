# styleguide

A style guide for Mozilla branded websites

## Getting started

We are going to assume you want to contribute to this project so, first thing to do is to fork this
project to your profile and then clone the project to your local machine.

``` bash
git clone git@github.com:yourusername/styleguide.git
```

Once this is complete, you need to install some dependecies. Change directory into your newly created project folder. Run the following command from your terminal.

NOTE: You will need Nodejs installed. If you do not have it already, head over to the
[Nodejs](https://www.nodejs.org/) website, download, and run the installer.

``` bash
npm install
```

## Adding a new page

All content pages for the styleguide will reside in the `/styleguide` folder. These can be grouped
into sub-folders under the root `/styleguide` folder, and can be as deeply nested as you require.

The main container for the site resides at `/index.html` and, for the most part, you will never need
to touch this file. This file then also provides the overall structure for the styleguide.

To create a new page, create a new HTML file within one of the existing subdirectories or, create a
new one if required. This file then only needs to contain the content for the section of the styleguide you are adding. For example:

``` html
<h2>Buttons</h2>
<p>Buttons come in three varieties: download buttons, standard buttons and user flow buttons.</p>

<h3>Download buttons</h3>
<section class="sample-container">
  <button class="button-green">download</button>
</section>
```

Once you have created your page, you need to add a link to it. This is the only time you will need to edit the `/index.hml` file at the root of the project. When you open this file you will find a `ul` element containing all of the current links. Go ahead and add a link to your new page. For example:

``` html
<li><a href="/styleguide/forms/index.html">Forms</a></li>
```

## Starting the server

In order to view the pages locally, you need to fire up a server. To do this, open up the terminal
and the run the followig command from the root of the project.

``` bash
npm start
```

This will then start a simple HTTP server and open your browser to the landing page of the styleguide. To stop the server, simply press Cmd/Ctrl + C in the terminal.

## Code exmaples

To add code samples to a page, you can simply follow the below template:

``` html
<section class="sample-container">
  <button class="button-green">download</button>
</section>

<section class="code-sample show">
<h4>HTML</h4>
<pre>
<code class="language-markup"></code>
</pre>
</section>
```

You need not add anything to the `code-sample` section as this will be injected with JavaScript. All you need to do is add the HTML for your live exmaple, inside the `sample-container` section.
