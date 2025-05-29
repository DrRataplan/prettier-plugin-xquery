declare default element namespace "http://www.example.org/ns/p";

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xml";
declare option output:cdata-section-elements "b";
declare option output:suppress-indentation "para";

<chapter
  xmlns="http://www.example.com/ns/c"
  ><section><para><b>bold</b><i>italic</i></para><para
    xmlns:p="http://www.example.org/ns/p"
    ><p:b>BOLD</p:b><p:i>ITALIC</p:i></para></section></chapter>
