Jr('controller', 'contacts', {
  
  index: function () {
    var contact_list = [];
    $.each(this.db.collection('contacts').all(), function(i,e) {
      $contact = e.json();
			contact_list.push(
        jTag('p', 
				  jLink($contact.first_name + " " + $contact.last_name,
					   '#contacts/?/show'.replace(/\?/, e.id()))
				) + 
				jTag('p', $contact.email) 				 
      );
    });
    
    Jr('html',
      jList(contact_list) + _br +
      jLink('New Contact','#contacts/add') 
    );
  },
  add: function () {
    Jr('html',
      jTag('form',
			  jTag('p',
        	jLabel('first_name', "First Name" + _br +
        	jText('first_name'))
				) +
				jTag('p',
				  jLabel('last_name', "Last Name" + _br +
					jText('last_name'))
				) +
				jTag('p', 
				  jLabel('email', "Email" + _br +
					jText('email'))
				) +
        jSubmit('create_contact','Create Contact'),
        jAt('action', '#contacts/create')
      )  
    );
  },
  create: function () {
    this.db.collection('contacts').create({ 
			first_name: $('#first_name').val(), 
			last_name: $('#last_name').val(),
			email: $('#email').val()
		}, {
			success: function() {
				Jr('route', '#contacts');
			},
			failure: function() {
			  Jr('html', jTag('h1', "Error Occurred Adding Contact"));
			}
		});
    
  },
  show: function(id) {
    with(this.db.collection('contacts').get(id).json()) {
			Jr('html', 
      	jTag('h2', first_name + " " + last_name) +
      	jTag('p', email) +
				jTag('p', 
					jLink('Edit', '#contacts/?/edit'.replace(/\?/, id)) + _space + 
      		jLink('Delete', '#contacts/?/destroy'.replace(/\?/, id)) + _space +
      		jLink('Return', '#contacts')
				)
    	);
		}
  },
  edit: function (id) {
    with(this.db.collection('contacts').get(id).json()) {
			Jr('html',
      	jTag('form',
        	jTag('p',
						jLabel('first_name', "First Name" + _br +
        		jText('first_name', first_name)) 
        	) +
					jTag('p',
					  jLabel('last_name', "Last Name" + _br +
						jText('last_name', last_name))
					) +
					jTag('p', 
					  jLabel('email', "Email" + _br +
						jText('email', email))
					) +
					jTag('p',
						jSubmit('update_contact','Update Contact')),
        	jAt('action', '#contacts/?/update'.replace(/\?/, id))
      	)  
    	);
		}
  },
  update: function (id) {
    $contact = this.db.collection('contacts').get(id)
		$contact.update({
			first_name: $('#first_name').val(),
			last_name: $('#last_name').val(),
			email: $('#email').val()
		}, {
	  	success: function(){
				Jr('route','#contacts/?/show'.replace(/\?/, id));
			},
			error: function(){
				Jr('html', jTag('h1', "Error Occurred Updating Contact"));  
			}
		});
  },
  destroy: function(id) {
    $contact = this.db.collection('contacts').get(id);
		$contact.destroy({
			success: function() {
				Jr('route','#contacts');
			},
			error: function() {
				Jr('html', jTag('h1', "Error Occurred Removing Contact"));
			}
		});
  }
});

$(document).ready(function(){
  Jr('container', '#main');

	// Set Database to db object on controller
	Jr('contacts').db = $.cloudkit;
	
	// Initialize Database
  Jr('contacts').db.boot({
		success: function() {
      Jr('run', 'contacts');
		},
		failure: function() {
			$('html', 
			  jTag('h1', "There was a problem connecting to the data store"));
		}
	});

});
