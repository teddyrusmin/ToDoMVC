# ToDoMVC
A demo of automation testing using Selenium Webdriver - Cucumber. Developed on Eclipse MARS2. To be tested with ToDoMVC for the following scenarios:
  1. Add a new todo
  2. Mark a todo as completed
  3. Delete a todo
  4. View only Active todos
  5. View only Completed todos


Assumptions
===========
- User needs to clear all the entries from the ToDoMVC website (http://gcloud-todos.appspot.com/examples/angularjs/#/), otherwise it will skew the results.
- User is assumed to be familiar with Eclipse IDE otherwise there are plenty of tutorial on the net.
- Test environment is in controlled environment, a delay in the internet connection might skew the results.
- Firefox browser, Eclipse and JDK is setup in the user computer. The project was build on Firefox 46.0.1, Eclipse MARS 2, JDK 8u91 and Win 8.1. If you are using a different environment, you might need to tweak it first
- Please note that the only supported browser is Firefox

Setup guide
===========
1. Open up the project in Eclipse IDE and set it to run with Java 1.8
2. Include all jars dependency that is provided in jars directory
3. Build the project
4. Run testRunner as JUnit Test
5. You can monitor the result in the console panel as well

