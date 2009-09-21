# Junior

## What?
Is a Javascript Single Page Application Framework under 5K.

This small little framework, makes it super easy to create applications in javascript.  

## Why?

With the incredible changes in browsers, and the DOM Framework Libraries, as well as the new RESTful/Programmable Web.  Working with javascript has never before been as consistent, flexible and powerful.  This framework does one thing, it gives you freedom to quickly create single page applications that have organization and structure, but it does not try to add any bloat to your project.

There is a very simple sample application included in this project, called widgets, it demonstrates a simple crud application.

## Basic Overview

The concept is simple, Jr does not worry about views, or modes, it just focuses on controllers and routing.  Jr binds all hyperlinks that start "#" and all forms on the page, and maps them to a routing engine.  This routing engine makes it simple to create controllers.

Here is an example of the widgets controller:

    Jr('controller', 'widgets', {
      index: function() {
        Jr('html', "<p>Hello World</p>");
      }
    });  
    
This code is creating a controller object with a name of widgets on the Jr Object, then creating a method inside the controller called index.  The Jr routing engine will process the following url "#/widgets" to the index action, or "#/widgets/index" as well.  So if you add a hyperlink to your page with a href of "#/widgets", Jr will know to route it to the "index" action and execute the function defined.

Now in the index action, you see another Jr method: "Jr('html', content)".
This method will basically write the html string on to the div tag specified in Jr.  It is just a simple way of running the following jQuery method "$('#main').html(content);".  And there is nothing restricting you from executing a statement like this.  The Jr html method is simply there to make things a little easier.

What is really neat about this capability is that you can create several controllers with ease, and it is not restricting you from creating them in one file or separate files.

    Jr('controller', 'widgets', {
      index: function(){
        // #/widgets
        
        // List all Widgets
      },
      show: function(id){
        // #/widgets/:id/show

        // Show Widget
      },
      add: function () {
        // #/widgets/add

        // Show Add Form
      },
      create: function () {
        // #/widgets/create
        
        // Create Widget and redirect to show
      },
      edit: function (id) {
        // #/widgets/:id/edit
        
        // Show Edit Form
      },
      update: function (id) {
        // #/widgets/:id/update
        
        // Update Widget and redirect to show
      },
      destroy: function (id) {
        // #/widgets/:id/destroy
        
        // Remove Widget
      }
    });


Now, I know this does not have all the glamor of some of the rest style frameworks, and is more like old school rails, but by using these actions, you are able to keep the controller framework under 5k.  The other side of this, is that you can create any action you want and call it anything you want, as long as it does not conflict with Javascript Reserved words.  (new, delete) are a couple of words you can't use.

Adding a RESTful Datastore is very simple, especially with the jQuery Plugins for [CloudKit](http://getcloudkit.org), and [CouchDb](http://couchdb.org), and more.

As far as views, Jr leaves this up to you on how to implement, [jTag](http://twilson63.github.com/jTag) is one that we use, but there is also [Micro Templating](http://ejohn.org/blog/javascript-micro-templating/).

Lastly, you can set some defaults on the page load event:

    $(document).ready(function(){
      Jr('container', '#main')
      Jr('route', '#/widgets');
    });
    
## More 

This code is hot off the presses, and should only get better.  More to come.....