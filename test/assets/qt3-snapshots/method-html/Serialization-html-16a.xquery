declare boundary-space strip;

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "html";
declare option output:indent "yes";
declare option output:suppress-indentation "Q{http://www.w3.org/1999/xhtml}td Q{http://www.w3.org/1999/xhtml}p";
declare option output:version "5.0";

<html xmlns="http://www.w3.org/1999/xhtml">
  <body><div><p>This is <b>bold</b> and <i>italic</i></p><p>two</p></div></body>
</html>
