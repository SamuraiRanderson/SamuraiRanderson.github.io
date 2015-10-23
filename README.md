<<<<<<< HEAD
#Projects hosted on GitHub Pages

#####Interactive Resume

Looking for a web developer? You can take a look at my projects below and click [here](http://samurairanderson.github.io.) to view my resume!

My repository for this project can be viewed [here](https://github.com/SamuraiRanderson/Resume).

#####Neighborhood Map

If you happen to be in Dallas and get a craving for some great food, or want to spend the day experiencing some amazing works of art, you can find some great places for both [here](http://samurairanderson.github.io/Neighborhood-Map). This is a single page application that utilizes the Google Maps API, and Instagram's API, to showcases some fantastic locations in Dallas, TX.

The GitHub repository for this project is located [here](https://github.com/SamuraiRanderson/Neighborhood-Map). 

#####Website Optimization

In this project our cohort was assigned the challenge of tackling, and correcting, some performance-related issues
that exist on a website provided to us. The main tasks were to achieve a [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) score of 90+ for index.html,
achieving a 60 Frames Per Second for pizza.html, and getting the pizza size animations on pizza.html to resize in under 5 ms.

I implemented the optimizations, modifications, and tests outlined [here](https://github.com/SamuraiRanderson/P4-Website-Optimization) to exceed the rubric specifications for this project. It may be tough to look at _(I didn't design it so don't shoot the messenger)_ but it now purrs like a high performance sports car.

#####Classic Arcade Game Clone

This was a fun project! In this, the third project of Udacity's Front End Web Developer Nanodegree program, I was provided with a game loop engine, and visual assets, with the task to create a video game based off the 1981 iconic video game "Frogger". I used HTML5 Canvas, CSS and JavaScript to build this project. I incorporated custom images, and features, to make the game more unique and express my creativity; creating a more pleasant user experience.

You can click [here](http://samurairanderson.github.io/P3-Classic-Arcade-Game-Clone) if you would like to give it a try, and you can find the project repository [here](https://github.com/SamuraiRanderson/P3-Classic-Arcade-Game-Clone).

#####Move Planner App

Looking to relocate? Curious about a new area or want to checkout a new neighborhood? You can use [this](http://samurairanderson.github.io/Move-Planner-App) application to see a street view of an address along with relevant articles about the area searched from the New York Times and Wikipedia information as well! Go ahead and try it out! You may just find your new dream home!

My repo for this project is located [here](https://github.com/SamuraiRanderson/Move-Planner-App).

#####Mockup to Website

Working with graphic artists, and designers, to _accurately_ transfer their concepts and designs onto the web is essential. The first project of Udacity's Front End Web Developer Nanodegree program focused on that aspect of web development. I was provided with a design mockup PDF-file and had to replicate that design using HTML and CSS. The final submission of this project had to have less than an 8% margin of error.

You can view the final pixel perfect replication of the mockup [here](http://samurairanderson.github.io/P1-Mockup-to-Website)! If you would like to see the code behind this project you can click [here](https://github.com/SamuraiRanderson/Mockup-to-Website).
||||||| merged common ancestors
=======
## Website Performance Optimization Portfolio Project
=====================================================

In this project our cohort was assigned the challenge of tackling, and correcting, some performance-related issues
that exist on a website provided to us. The main tasks were to achieve a [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) score of 90+ for index.html,
achieving 60 Frames Per Second for pizza.html, and getting the pizza size animations on pizza.html to resize in under 5 ms.

To run/test the index.html please [Click Here](http://samurairanderson.github.io)

To test the optimizations implemented for pizza.html please [Click Here](http://samurairanderson.github.io./views/pizza.html)

Comments for specific changes made can be found nested within index.html, views/pizza.html, views/js/main.js, and view/css/style.css.

Below is an overview of the optimizations, modifications, and tests performed to meet the rubric specifications for this project. 
 

####Part One: Optimize PageSpeed Insights score for index.html


Measured the initial Google PageSpeed Insight scores which were - Mobile: 26/100, Desktop: 29/100.

Modifications and Optimizations Implemented:
* Removed Web Fonts.
* Added media query to print.css.
* Inlined style.css.
* Resized, compressed, and locally stored the images used.
* Inlined google-analytics.js file.
* Async the js/analytics.js & js/perfmatters.js files.

Measured performance after making the above changes and they were - Mobile: 93/100, Desktop: 95/100.

####Part Two: Optimize Frames per Second in pizza.html

Measured the initial Frames Per Second which were between 20 - 30 fps.

Modifications and Optimizations Implemented:
* Added meta info to pizza.html.
* Reduced the number of pizza's generated from 200 to 30.
* Compressed, and resized, images.
* Utilized style.css to assign properties to pizza images.
* Compressed, and inlined, style.css.
* Modified/Optimized Javascript. Changes are outlined in the comments within main.js.

Measured performance after the above changes and it is now running at 60 FPS.

####Part Three: Computation Efficiency

Measured the initial resize time which was 83.33 ms.

Modifications and Optimizations implemented to get the time to resize pizza's less than 5 ms:
* Modified/Optimized Javascript, CSS and HTML to achieve the final result.
* Replaced "randomPizzaContainer" (377 main.js) with "randomPizzaContainerMedium" (387 main.js) and created 
  a corresponding class for each size within 'function sizeSwitcher(size)' (434 main.js). I updated 
  pizza.html as a result of this change (109 & 126 in pizza.html). 
* As a result of the changes made to "function sizeSwitcher(size)" I updated style.css for each size.
* Utilized a technique by Paul Lewis (http://www.html5rocks.com/en/tutorials/speed/animations/) to rewrite
  the scroll function.
* Removed the DOM access from the for loop in "function updatePositions()" to boost performance and avoid
  triggering a unnecessary layouts.

Measures performance after the above changes and resizing pizzas is now at 0.46 ms.


####References used for this project include:

* [Udacity's Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)
* [Udacity's' Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)
* http://www.html5rocks.com/en/tutorials/speed/animations/
* http://www.webreference.com/programming/javascript/jkm3/index.html
* http://gent.ilcore.com/2011/03/how-not-to-trigger-layout-in-webkit.html
* https://developer.chrome.com/devtools/docs/network#resource-network-timing
* GitHub
* Udacity Office Hours
* https://github.com/0per8/Udacity-Project-4
* http://jscompress.com/
* Stack Overflow

>>>>>>> 97efcd20487420cd0b8e226c937c79791b7c2774
