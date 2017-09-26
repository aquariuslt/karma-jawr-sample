/* Vendor import */
require('@/vendor/ext/ext-base');
require('@/vendor/ext/ext-all');

require('@/home/datastore/home.base.datastore');
require('@/home/ui/home.ui');
require('@/home/impl/home.impl');

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


