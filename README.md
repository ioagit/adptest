# [ADP Test]

This is a small angularjs project for the ADP Test.

## Hosting.

* You could see the project running at:
https://adptest-3350c.firebaseapp.com

## How to run it locally?

* Clone the repo (https://github.com/ioagit/adptest)
* nmp install
* bower install


## Build & development

Run `grunt serve` for preview.
Run `grunt serve:dist` to preview the minimize version.


## Dependency management  and tasks

* Projects dependencies (angular, bootstrap) are manage with bower (https://bower.io/)
* Project building is done using Grunt (http://gruntjs.com/). My preference now is using Gulp or Webpack
* Angular dependencies are passed directly to the function definition of the angular component type instead of using the array format 
  ng-annotate is running as one of the task and that solves the dependencies issue with sources are minimized

# What's included


* Angular route was use for managing all routes in the project. For bigger projects I would prefer ui-router. 
* An language dropdown directive was created to use in both Blogs and Glossary pages. This directive has a langSVC dependency
* A  language service was built to host the possible languages.
* In order to minimize code in the controllers a data service was built to retreive the blogs and glossaries.
* A custom date filter was built to properly parse the dates on the blog feed. The date format need manipulation in order to use the native date filter. 
  The blog controller could have done this but for reusability and keeping lean controllers the filter was created.
* The toList Filter was create to parse an array and return a string separated by a separator (", ") by default. This was used for the categories on the blog feed.
  This allows for a cleaner html markup and added reusability. 


## Testing

Not added  but in regular development should be mandatory.

## Observations

* The design does not match the mock up 100% as must of the effort was put into showcasing angular skills.
* On the contact form  instructions the alert to show the validity of the form without ng-click was done using ng-submit.
  Im not sure if that would be the correct approach although no ng-click was use. As alternative $watches could be used as at any given moment the state of the form and the validity of all of its fields are known.
  
  
