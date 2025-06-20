declare namespace functx = "http://www.example.com/";

(:~
 : Replaces the beginning of a string, up to a matched pattern : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_replace-beginning.html : @param $arg the entire string to change : @param $pattern the pattern of characters to replace up to : @param $replacement the replacement string
 :)
declare function functx:replace-beginning (
  $arg as xs:string?,
  $pattern as xs:string,
  $replacement as xs:string
) as xs:string {
  replace($arg, concat("^.*?", $pattern), $replacement)
};

(functx:replace-beginning("2004-12-05", "-", "2005-"))
