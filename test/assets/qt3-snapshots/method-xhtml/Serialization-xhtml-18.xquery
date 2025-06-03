declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace ex = "http://www.example.org";

declare option output:method "xhtml";
declare option output:indent "no";
declare option output:html-version "4.0";
declare option output:cdata-section-elements "p em ex:isle1";

<html>
  <body>
    <p>YES<em>YES</em>YES<ex:isle1>YES<ex:isle2>NO</ex:isle2>YES</ex:isle1></p>
  </body>
</html>
