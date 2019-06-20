var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
  include: "*.beon.ru",
  contentScriptFile: data.url("replace.js")
});