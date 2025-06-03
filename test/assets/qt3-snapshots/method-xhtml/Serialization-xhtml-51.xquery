declare boundary-space strip;

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xhtml";
declare option output:indent "no";
declare option output:html-version "5.0";

<h:html xmlns:h="http://www.w3.org/1999/xhtml">
  <h:body>
    <h:h1>Header</h:h1>
    <h:p>Content</h:p>
    <svg:svg xmlns:svg="http://www.w3.org/2000/svg"><svg:rectangle /></svg:svg>
  </h:body>
</h:html>
