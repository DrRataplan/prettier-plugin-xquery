declare namespace functx = "http://www.example.com/";

(:~
 : Split a string into separate lines : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_lines.html : @param $arg the string to split
 :)
declare function functx:lines ($arg as xs:string?) as xs:string* {
  tokenize($arg, "(\r\n?|\n\r?)")
};

let $in-xml := <in-xml>a value on many lines</in-xml>
return (functx:lines("a value"))
