declare boundary-space strip;

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xhtml";
declare option output:indent "no";
declare option output:html-version "4.0";

let $html := <html>
  <body>
    <area />
    <base />
    <br />
    <col />
    <embed />
    <frame />
    <hr />
    <img />
    <input />
    <isindex />
    <link />
    <meta />
    <param />
  </body>
</html>
return [$html]
