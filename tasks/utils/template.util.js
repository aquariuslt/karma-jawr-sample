var _ = require('lodash');
var fs = require('fs');
var PropertiesReader = require('properties-reader');

/**
 * @param {String} templateContent with ${key} syntax template tags
 * @param {Object} properties
 * @return {String} compiled result
 * */
function compileTemplate(templateContent, properties) {
  var propertiesKeys = _.keys(properties);
  var compiledContent = templateContent;

  _.each(propertiesKeys, function(key) {
    var matchingTemplateKey = new RegExp('\\$\\{' + key + '\\}', 'g');
    compiledContent = _.replace(compiledContent, matchingTemplateKey, properties[key]);
  });
  return compiledContent;
}

/**
 * @param {String} templateFilePath
 * @param {String} propertiesFilePath
 * @param {String} outputFilePath
 * */
function compileTemplateFromFile(templateFilePath, propertiesFilePath, outputFilePath) {
  var properties = PropertiesReader(propertiesFilePath);

  var propertiesMap = properties.getAllProperties();

  var templateContent = fs.readFileSync(templateFilePath).toString();

  var compileResult = compileTemplate(templateContent, propertiesMap);

  fs.writeFileSync(outputFilePath, compileResult);
}

module.exports.compileTemplate = compileTemplate;
module.exports.compileTemplateFromFile = compileTemplateFromFile;
