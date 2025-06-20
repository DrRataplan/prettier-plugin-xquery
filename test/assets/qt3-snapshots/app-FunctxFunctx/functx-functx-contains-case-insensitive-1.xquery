declare namespace functx = "http://www.example.com/";

(:~
 : Whether one string contains another, without regard to case : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_contains-case-insensitive.html : @param $arg the string to search : @param $substring the substring to find
 :)
declare function functx:contains-case-insensitive (
  $arg as xs:string?,
  $substring as xs:string
) as xs:boolean? {
  contains(upper-case($arg), upper-case($substring))
};

(functx:contains-case-insensitive("abcdef", "def"))
