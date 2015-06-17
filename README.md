## Website Performance Optimization Portfolio Project
=====================================================

In this project our cohort was assigned the challenge of tackling, and correcting, some performance-related issues
that exist on a website provided to us. The main tasks were to achieve a [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)score of 90+ for index.html,
achieving 60 Frames Per Second for pizza.html, and getting the pizza size animations on pizza.html to resize in under 5 ms.

To run/test the index.html please [Click Here](http://samurairanderson.github.io)

To test the optimizations implemented for pizza.html please [Click Here](http://samurairanderson.github.io./views/pizza.html)

Comments for specific changes made can be found nested within index.html, views/pizza.html, views/js/main.js, and view/css/style.css.

Below is an overview of the optimizations, modifications, and tests performed to meet the rubric specifications for this project. 
 

####Part One: Optimize PageSpeed Insights score for index.html


Measured the initial PageSpeed Insight scores which were - Mobile: 26/100, Desktop: 29/100.

Modifications and Optimizations Implemented:
1) Removed Web Fonts.
2) Added media query to print.css.
3) Inlined style.css.
4) Resized, compressed, and locally stored the images used.
5) Inlined google-analytics.js file.
6) Async the js/analytics.js & js/perfmatters.js files.

Measured performance after making the above changes and they were - Mobile: 93/100, Desktop: 95/100.

####Part Two: Optimize Frames per Second in pizza.html

Measured the initial Frames Per Second which was between 20 - 30 fps.

Modifications and Optimizations Implemented:
1) Added meta info to pizza.html.
2) Reduced the number of pizza's generated from 200 to 30.
3) Compressed, and resized, images.
4) Utilized style.css to assign properties to pizza images.
5) Compressed, and inlined, style.css.
6) Modified/Optimized Javascript. Changes are outlined in the comments within main.js.

Measured performance after the above changes and it is now running at 60 FPS.

####Part Three: Computation Efficiency

Measured the initial resize time which was 83.33 ms.

Modifications and Optimizations implemented to get the time to resize pizza's less than 5 ms.
1) Modified/Optimized Javascript, CSS and HTML to achieve the final result.
2) Replaced "randomPizzaContainer" (377 main.js) with "randomPizzaContainerMedium" (387 main.js) and created 
   a corresponding class for each size within 'function sizeSwitcher(size)' (434 main.js). I updated 
   pizza.html as a result of this change (109 & 126 in pizza.html). 
3) As a result of the changes made to "function sizeSwitcher(size)" I updated style.css for each size.
4) Utilized a technique by Paul Lewis (http://www.html5rocks.com/en/tutorials/speed/animations/) to rewrite
   the scroll function.
5) Removed the DOM access from the for loop in "function updatePositions()" to boost performance and avoid
   triggering a unnecessary layouts.

Measures performance after the above changes and resizing pizzas is now at 0.46 ms.


####References used for this project include:

[Udacity's Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)
[Udacity's' Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)
http://www.html5rocks.com/en/tutorials/speed/animations/
http://www.webreference.com/programming/javascript/jkm3/index.html
http://gent.ilcore.com/2011/03/how-not-to-trigger-layout-in-webkit.html
https://developer.chrome.com/devtools/docs/network#resource-network-timing
GitHub
Udacity Office Hours
https://github.com/0per8/Udacity-Project-4
http://jscompress.com/
Stack Overflow

<br>
   





Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
