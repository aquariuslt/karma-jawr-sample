var expect = window.chai.expect;
describe('base', function() {

  it('# test jawr global resource load complete', function() {
    var defaultLocaleMessage = i18n.home.title();
    expect(defaultLocaleMessage).to.eq('HomePage Sample Title');
  });

  it('# test jawr global message generator with arguments', function() {
    var localeMessage = i18n.home.subtitle('Hello');
    var expectedLocalMessage = 'Home Subtitle: Hello';
    expect(localeMessage).to.eq(expectedLocalMessage);
  });

});
