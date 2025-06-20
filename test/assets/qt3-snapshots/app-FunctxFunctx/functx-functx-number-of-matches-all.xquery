declare namespace functx = "http://www.example.com/";

(:~
 : The number of regions that match a pattern : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_number-of-matches.html : @param $arg the string to test : @param $pattern the regular expression
 :)
declare function functx:number-of-matches (
  $arg as xs:string?,
  $pattern as xs:string
) as xs:integer {
  count(tokenize($arg, $pattern)) - 1
};

(
  functx:number-of-matches("abcabc", "ab"),
  functx:number-of-matches("12345", "\d"),
  functx:number-of-matches("aaaaaa", "aaa")
)
