declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xml";
declare option output:item-separator "==";

(1 to 4)!text { . }
