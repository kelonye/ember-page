var select = require('ember-select');
var compile = Em.Handlebars.compile;

module.exports = Em.Mixin.create(select, {
  classNames: ['component-page'],
  label: function(){
    var content = '' + this.get('content');
    var last = '' + this.get('controller.content.lastObject');
    var numOfZerosToPrepend = last.length - content.length;
    while (numOfZerosToPrepend--){
      content = '0' + content;
    }
    return content;
  }.property('content'),
  template: compile('{{view.label}}')
});