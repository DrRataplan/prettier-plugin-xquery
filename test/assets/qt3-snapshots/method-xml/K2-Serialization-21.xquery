declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xml";
declare option output:version "1.1";
declare option output:undeclare-prefixes "no";

<p:chapter
  xmlns:p="http://example.com/p"
  ><section xmlns:p=""><para /></section></p:chapter>
