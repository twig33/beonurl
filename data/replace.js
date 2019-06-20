var specialchars = ['/', ':', '?', '='];

var processedUrl = document.getElementsByClassName("favicon_processed");
var i;
var str;
for (i = 0; i < processedUrl.length; i += 1)
{
    str = processedUrl.item(i).href;
    if (str.substr(15,4) === "r?r=")
    {
		for (var t = 0; t < specialchars.length; ++t){
		    str = str.replace(new RegExp(encodeURIComponent(specialchars[t]), 'gi'), specialchars[t]);
	    }
        processedUrl.item(i).href = str.substr(19, str.length - 19);
    }
}