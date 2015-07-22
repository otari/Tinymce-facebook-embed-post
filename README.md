# Tinymce-facebook-embed-post

Adds Facebook post embed functionality to tinymce (plugin)

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

Simply Copy/Paste embed code of any post on Facebook, plugin will take care about grabbing needed data from it. 
Plugin simply puts dummy image into your content with *data-post*, *data-width* attributes containing information about Facebok post. 


**Loading Embed post client side**
...


**Javascript**
...


**PHP**
...
