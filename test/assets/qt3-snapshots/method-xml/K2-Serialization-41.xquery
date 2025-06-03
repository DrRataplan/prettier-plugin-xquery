declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xml";
declare option output:indent "yes";

(: The spec says: Element constructors treat attributes named xml:space as ordinary attributes. 
           An xml:space attribute does not affect the handling of whitespace by an element constructor. :)
<test><a xml:space="preserve"><x /></a><b /></test>
