declare namespace functx = "http://www.example.com/";

(:~
 : Trims leading whitespace : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_left-trim.html : @param $arg the string to trim
 :)
declare function functx:left-trim ($arg as xs:string?) as xs:string {
  replace($arg, "^\s+", "")
};

(functx:left-trim("xyz"))
