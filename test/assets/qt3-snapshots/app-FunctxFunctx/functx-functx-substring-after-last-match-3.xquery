declare namespace functx = "http://www.example.com/";

(:~
 : The substring after the last text that matches a regex : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_substring-after-last-match.html : @param $arg the string to substring : @param $regex the regular expression
 :)
declare function functx:substring-after-last-match (
  $arg as xs:string?,
  $regex as xs:string
) as xs:string {
  replace($arg, concat("^.*", $regex), "")
};

(functx:substring-after-last-match("abcd-abcd", "x"))
