"# mightyhive-circle" 
This application is built with Express and Node.js
It uses pug as the view engine
You can see this app at the following URLs
1) https://mightyhive-circle.herokuapp.com/
2) https://mightyhive-circle.herokuapp.com/ball
   This second URL demonstrates a very simple use of a controller

Update April 5, 2021
Modifiled the ball route to display a shiny ball, which may look more ball-like
New code was added, rather thab existing code modified since I didn't want to clobber the original code, 
because  the requirement was that it be submited with 48 hours of receipt of original specs

Code added
1) public\javascripts\shinyBall.js - Set the display of the ball to none when deleting cookies
2) public\stylesheets\ballStyle.css - new style sheet for shiny ball
3) views\ballIndex.pug - use new style sheet for shiny ball
4) views\ballLayout.pug - the link to the new style sheet, called from views\ballIndex.pug

