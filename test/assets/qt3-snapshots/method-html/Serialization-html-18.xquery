declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace ex = "http://www.example.org";

declare option output:method "html";
declare option output:indent "no";
declare option output:version "4.0";
declare option output:cdata-section-elements "p em ex:isle1";

<html>
  <body>
    <p>No CDATA<em>No CDATA</em>No CDATA<ex:isle1>Some CDATA<ex:isle2
        >No CDATA</ex:isle2>More CDATA</ex:isle1>
    </p>
  </body>
</html>
