"content_scripts": [
  {
    "matches": [
      "<all_urls>"
    ],
    "js": ["content.js"]
    var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);
  }
]