/* Vendor import */
require('@/jsBundles/extJs.js/');
require('@/jsBundles/home.js/');

describe('home', function() {

  /**
   * In `before` case, we try the behavior like `home.xhtml`
   * to apply home to Ext.getBody()
   * */
  before(function() {
    Ext.onReady(function() {
      Ext.QuickTips.init();
      new agile.example.app.Home({
        renderTo: Ext.getBody()
      });
    });
  });

  it('test home resources load correctly', function() {
    expect(agile.example.app.Home).not.to.eq(undefined);
  });

  it('test home ui render correctly', function() {
    var appHomePanel = Ext.getCmp('app.home');
    expect(appHomePanel).not.to.eq(undefined);
  });
});


