tinymce.PluginManager.add('facebookembed', function(editor, url) {
	    	// Add a button on toolbar
	    	editor.addButton('facebookembed', {
		        text: 'Facebook embed',
		        icon: false,
		        context:"toolbar",
		        onclick: function() {
		            facebookEmbedOpen();
		        }
	    	});
	    	//Add menu item 
	    	editor.addMenuItem('facebookembed', {
		        text: 'Embed Facebook post',
		        context: 'insert',
		        onclick: function() {
		            // Open window
		            facebookEmbedOpen();
		        }
    		});

		    function facebookEmbedOpen() {
		    	editor.windowManager.open({
	                title: 'Embed Facebook post',
	                width:400,
	                height:110,
	                body: [{
	                    	type: 'textbox', name: 'post', label: 'Embed code'
	                },
	                {
						type: 'container',
						label: 'Width',
						layout: 'flex',
						direction: 'row',
						align: 'center',
						spacing: 5,
						items: [{
								name:'width', 
								type:'textbox', 
								maxLength:4,
								size:3,
								onchange:false,
								ariaLabel:'Width'
							}]
					}],
	                onsubmit: function(e) {
	                    
	                    var FbEmbeds, FbImage, FbBEmbedWidth, FbEmbedError;

	                    FbEmbeds = e.data.post.match(/(https?:\/\/)?(www.)?facebook.com\/([\S]+\/(posts|permalink|photos|videos)\/(\d|[a-zA-Z0-9.\/\?type=\d])+|permalink.php\?story_fbid=\d+&amp;id=\d+|photo.php\?[a-zA-Z=]+\d+|video.php\?[a-zA-Z=]+\d+|media\/set\/\?set=[a-zA-Z0-9.]+)/ig);
	                   
	                    if(FbEmbeds === null){
	                    	FbEmbedError = true;
	                    }else if(!FbEmbeds.length) {
	                    	FbEmbedError = true;
	                    }
	                    
	                    if(!FbEmbedError) {
	                    	
	                    	//Get Width
	                    	FbBEmbedWidth = parseInt(e.data.width);
		                    
		                    //Create img element
		                    FbImage = document.createElement("img");
		                    
		                    //Set img src attribute value
		                    FbImage.src = tinymce.baseURL + '/plugins/facebookembed/img/facebookembedpost-tinymce-placeholder.png';
		                    
		                    //Add data attributes to img element
		                    FbImage.setAttribute('data-post', FbEmbeds[0]);
		                    FbImage.setAttribute('data-width', (FbBEmbedWidth ? FbBEmbedWidth : 960));
		                    
		                    // Insert content when the window form is submitted
		                   	editor.insertContent(FbImage.outerHTML);
		                }
	                }
	            });
		    }
		});