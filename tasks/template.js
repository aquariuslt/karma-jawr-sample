/**
 * Template compile process task (optional for non-using template engine in jawr.properties)
 **/
var _ = require('lodash');
var gulp = require('gulp');
var path = require('path');
var mkdirp = require('mkdirp');

var templateUtil = require('./utils/template.util');

var profileConfig = require('./config/profile.config');

gulp.task('template', function(done) {

  _.each(_.keys(profileConfig), function(profileKey) {
    var profile = profileConfig[profileKey];
    var profileLocation = profile.profile;
    var mappings = profile.mappings;

    _.each(mappings,function(mapping) {
      var templateLocation = mapping.template;
      var outputLocation = mapping.output;
      mkdirp.sync(path.dirname(outputLocation));
      templateUtil.compileTemplateFromFile(templateLocation, profileLocation, outputLocation);
    });
  });

  done();
});
