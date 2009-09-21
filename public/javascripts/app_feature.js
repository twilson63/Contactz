Pickle('feature', 'app_feature', function() {
/*
In order to manage widgets
As a widget user
I want to be able to list, create, edit and destroy widgets
*/

  Scenario('list_widgets', function () {
    Given('I have the following widgets: "Widget_A, Widget_B"');
    When('I follow "Widgets"');
    Then('I should see "Widget_A"');
    And('I should see "Widget_B"');
    
  });
  
  Scenario('add_widget', function() {
    Given('I have no widgets');
    And('I follow "New Widget"');
    When('I fill in "Name" with "Widget_A"');
    And('I press "Submit"');
    Then('I should see "Widget_A"')
  });
  
  Scenario('show_widget', function() {
    Given('I have the following widgets: "Widget_A"');
    And('I follow "Widgets"');
    When('I follow "Widget_A"');
    Then('I should see "Widget_A"');

  });

  Scenario('edit_widget', function() {
    Given('I have the following widgets: "Widget_A"');
    And('I follow "Widgets"');
    When('I follow "Widget_A"');
    And('I follow "Edit"');
    And('I fill in "Name" with "Widget_B"');
    And('I press "Submit"');
    Then('I should see "Widget_B"');

  });

  Scenario('destroy_widget', function() {
    Given('I have the following widgets: "Widget_A"');
    And('I follow "Widgets"');
    When('I follow "Widget_A"');
    And('I follow "Delete"');
    Then('I should not see "Widget_A"');

  });
  
  
  
});