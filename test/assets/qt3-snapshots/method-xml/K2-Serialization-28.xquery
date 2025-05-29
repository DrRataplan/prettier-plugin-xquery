declare default element namespace "http://www.example.org/ns/p";

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xml";
declare option output:indent "yes";
declare option output:suppress-indentation "p para";

<chapter
  xmlns=""
  ><section><para
    xmlns="http://www.example.org/ns/p"
    ><b>bold</b><i>italic</i></para><p><b>BOLD</b><i>ITALIC</i></p></section></chapter>
