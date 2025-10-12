declare namespace functx = "http://www.example.com/";

(:~
 : Trims trailing whitespace : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_right-trim.html : @param $arg the string to trim
 :)
declare function functx:right-trim ($arg as xs:string?) as xs:string {
  replace($arg, "\s+$", "")
};

(functx:right-trim(" x   xyz "))
