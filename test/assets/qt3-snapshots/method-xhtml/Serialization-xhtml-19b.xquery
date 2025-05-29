declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace html = "http://www.w3.org/1999/xhtml";

declare option output:method "xhtml";
declare option output:indent "no";
declare option output:html-version "4.0";
declare option output:cdata-section-elements "b html:em";

<html><body><p><b>YES</b><em>NO</em><html:b>NO</html:b><html:em>YES</html:em></p></body></html>
