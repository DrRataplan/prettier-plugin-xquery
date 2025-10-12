declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "text";
declare option output:item-separator "|";

<a>{ 1, 2, 3 }</a>, <b>{ 4, 5, 6 }</b>
