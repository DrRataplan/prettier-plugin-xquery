declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace html = "http://www.w3.org/1999/xhtml";

declare option output:method "html";
declare option output:indent "no";
declare option output:version "4.0";
declare option output:cdata-section-elements "b html:em";

<html><body><p><b>No CDATA</b><em>No CDATA</em><html:b>No CDATA</html:b><html:em>Some CDATA</html:em></p></body></html>
