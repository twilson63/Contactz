Pickle('step', /^I have the following widgets: "([^\"]*)"$/, function() {
  Jr().widgets.widgets = arguments[0][0].split(", ");
  return true;
});

Pickle('step', /^I have no widgets$/, function() {
  Jr().widgets.widgets = [];
  return true;
});

Pickle('step', /^I should not see "([^\"]*)"$/, function() {
  var argument_value = arguments[0][0];
  var rx = new RegExp(RegExp().escape(argument_value));
  if($("body").html().match(rx) == null) {
    return true;
  } else {
    return false;
  }
  
});