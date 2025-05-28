declare boundary-space strip;

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xhtml";
declare option output:indent "no";
declare option output:html-version "5.0";

<h:html
  xmlns:h="http://www.w3.org/1999/xhtml"
  >
  <h:head><h:title>Test doc</h:title></h:head>
  <h:body><h:h1>Header</h:h1><h:p>Content</h:p></h:body>
</h:html>
