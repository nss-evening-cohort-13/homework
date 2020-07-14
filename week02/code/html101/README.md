# HTML 101

## HTML Part 1 - setup
1. Create an html101 repo
1. commit readme to master
1. make setup branch
1. Type out EVERY single line of html and explain what each does
1. Add main.css and main.js with background color change and console statement.
1. Merge in setup branch

```html
<!DOCTYPE html> <!-- tells the browswer that this document is in html 5.  if the html is uppercase then you have to specify more information (this was done in versions of html before 5.  so just make it lowercase)-->
<html lang="en"> <!-- tells the browser that this is the root of the html document -->
<head> <!-- container for all the head elements - link, meta, script, style, or title tags -->
  <meta charset="UTF-8"> <!-- this tells the browser what type of character set you are using.  You will practically always use UTF-8 as its the prefered standard for html-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- this sets the viewport of the site to match the width of the device you are on.  should always include this line -->
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> <!-- this specifies what versions of ie your site supports.  In this case we are only supporting modern browsers (edge and up) -->
  <title>Document</title> <!-- Whatever you type here will display in the title tab at the top of the browser -->
</head> <!-- closes head tag -->
<body> <!-- section of the document that contains ALL the html -->

</body> <!-- closing tag for body -->
</html> <!-- closing tag for html -->
```

## HTML Part 2 - navigation
1. Make a navigation branch
1. In the index build the nav bar
1. Add styling to CSS file
1. Create droids.html and people.html to test that links work
1. Add css file and navbar code to each html file for pages to all look the same
1. PR and merge branch in

## HTML Part 3 - semantic html (home page)
1.  create home branch
1.  create main structure - header, main, footer
1.  Add basic copyright and styling to footer
1.  Use a bunch of ipsum paragraphs to create an article and a bunch of sections on the home page.
1.  Apply the main structure (header, main, footer) to the people and droids pages.
1.  PR and merge branch in

## HTML Part 4 - People Page
1.  Create people branch
1.  Crowd source this to get 4 star wars characters that are not droids.
1.  Create basic cards with their information - image, name, dark/light side etc.
1.  Explain tags that get used - div, span, img, etc
1.  Apply some basic styling
1.  PR and merge branch in

## HTML Part 5 - Challenge - Droid Page
1.  Make a droids branch
1.  In whatever way you want, add images and information for at least 4 star wars droids to your page.  Feel free to add some styling.
1.  PR and merge branch in

