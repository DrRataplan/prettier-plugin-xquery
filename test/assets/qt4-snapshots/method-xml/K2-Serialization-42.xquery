declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xml";
declare option output:indent "yes";

<test><a xml:space="preserve">{ " " }<x />{ " " }</a><b /></test>
