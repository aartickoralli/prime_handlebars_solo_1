$(function () {
    
    // Grab the template script
      var theTemplateScript = $("#example-template").html();
      console.log(theTemplateScript);

      // Compile the template
      var theTemplate = Handlebars.compile(theTemplateScript);
      console.log(theTemplate);

      // Define our data object
     var context = {
      "name": "Aarti Koralli",
      "age": 123,
      "city": "Eagan MN",
      "school": "Prime",
      "handle": "challenges",
      "learn": "coding"



        
          
      
      

      };
     Handlebars.registerHelper('uppercase', function(options) {

        // "this" is the context that existed when calling the helper.

        // The options object has a special function - fn. This is a
        // compiled version of the template that is contained between the opening and closing
        // blocks of this helper. To get a string, call fn with the context:

        return options.fn(this).toUpperCase();

     });

      // Pass our data to the template
      var theCompiledHtml = theTemplate(context);
      console.log(theCompiledHtml);

      var $newDiv = $("<div class=myDiv></div>");

      // Add the compiled html to the page
      $('.content-placeholder').html(theCompiledHtml);



      
});
