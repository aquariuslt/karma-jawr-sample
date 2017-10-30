
var expect = window.chai.expect;
/* Vendor import */
require('@/cssBundles/ext.css/');
require('@/jsBundles/extJs.js/');
require('@/jsBundles/home.js/');

/* Unit test level lib import */
var _ = require('lodash');

describe('home', function() {

  /**
   * In `before` case, we try the behavior like `home.xhtml`
   * to apply home to Ext.getBody() or using new document.createElement with customize id;
   * */

  before('# fire ext ready event and initial component', function(done) {
    Ext.onReady(function() {
      if (_.get(window, 'agile.example.app.Home')) {
        new agile.example.app.Home({
          renderTo: Ext.getBody()
        });
      }
      done();
    });
  });

  after('# destroy event and component', function() {
    Ext.destroy(Ext.getCmp('app.home'));
  });

  it('# test home resources load correctly', function() {
    expect(agile.example.app.Home).not.to.eq(undefined);
  });

  it('# test home ui render correctly', function() {
    var appHomePanel = Ext.getCmp('app.home');
    expect(appHomePanel).not.to.eq(undefined);
  });

  it('# test home ui render correctly 2', function() {
    var appHomePanel = Ext.getCmp('app.home');
    expect(appHomePanel).not.to.eq(undefined);
  });
});


