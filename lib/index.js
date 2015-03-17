var select = require('ember-select');
var compile = Em.Handlebars.compile;

module.exports = Em.Mixin.create(select, {
  classNames: ['component-page'],
  label: function(){
    var val = '' + this.get('value');
    var last = '' + this.get('content.lastObject');
    var numOfZerosToPrepend = last.length - val.length;
    while (numOfZerosToPrepend--){
      val = '0' + val;
    }
    return val;
  }.property('value'),
  template: compile('{{view.label}}')
});