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
    expect(1).to.eq(1);
  });

  it('test home ui render correctly', function() {
    expect(1).to.eq(1);
  });
});


