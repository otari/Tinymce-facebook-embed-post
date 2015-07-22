# Tinymce-facebook-embed-post

Adds Facebook post embed functionality to tinymce (plugin)

> Tinymce Version 4.2

**Demo**

[1]: http://otsilosani.com/tinymcefbembed/
___

**Adding plugin to your tinymce**

 - Download plugin
 - Copy to ~tinymce/plugins folder
 - Initialize Tinymce with plugin

````javascript
tinymce.init({
	selector: "textarea",
	plugins: 'facebookembed'
});
```

> By Default Embed button is added under Tools menu of Tinymce, but you may add Facebook embed button directly to toolbar

````javascript
tinymce.init({
	selector: "textarea",
	plugins: 'facebookembed',
	toolbar:'facebookembed,link,image,etc..'
});
```

**Usage:**

Simply Copy/Paste embed code of any post from Facebook, plugin will take care about grabbing needed data from it. 
Plugin simply puts dummy image into your content with *data-post*, *data-width* attributes containing information about Facebok post. 


**Loading Embed post client side using Javascript**
*or you may use different approach loading embed post client side*
````javascript
	$(function(){
		var fb_embed_post_template = '<div class="fb-post" data-href="{embed_post_url}" data-width="{embed_post_width}"></div>';
		var embedPost = false;
		$.each($('.FacebookEmbedPost'), function(index, value) {
			embedPost = fb_embed_post_template.replace("{embed_post_url}", $(value).data('post')).replace("{embed_post_url}", $(value).data('width'));
			$(this).replaceWith(embedPost);
		});
	});
```

**dependency**
- facebook-jssdk
- jQuery


**PHP**
Coming Soon
