declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xml";
declare option output:indent " 1 ";
declare option output:suppress-indentation "para";

<chapter><section><para><b>bold</b>{
        " "
      }<i>italic</i></para></section></chapter>
