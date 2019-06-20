var processedUrl = document.getElementsByClassName("favicon_processed");
var str;
for (var i = 0; i < processedUrl.length; i += 1)
{
    str = processedUrl.item(i).href;
    if (str.indexOf("http://beon.ru/r?r=") != -1)
    {
        processedUrl.item(i).href = decodeURIComponent(str.substr(19, str.length - 19));
    }
}