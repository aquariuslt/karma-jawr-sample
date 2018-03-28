/** Created by Jason Cui on 2018-03-26.*/
var pathUtil = require('../utils/path.util');

var profileConfig = {
  foo: {
    profile: pathUtil.resolve('src/main/resources/profiles/foo-config.properties'),
    mappings: [
      {
        template: pathUtil.resolve('src/main/resources/jawr/jawr.tpl.properties'),
        output: pathUtil.resolve('src/test/js/unit/properties/jawr.foo.properties')
      }
    ]
  },
  bar: {
    profile: pathUtil.resolve('src/main/resources/profiles/bar-config.properties'),
    mappings: [
      {
        template: pathUtil.resolve('src/main/resources/jawr/jawr.tpl.properties'),
        output: pathUtil.resolve('src/test/js/unit/properties/jawr.bar.properties')
      }
    ]
  }
};

module.exports = profileConfig;
