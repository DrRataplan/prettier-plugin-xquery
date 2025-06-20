declare namespace functx = "http://www.example.com/";

(:~
 : Converts a string to a sequence of characters : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_chars.html : @param $arg the string to split
 :)
declare function functx:chars ($arg as xs:string?) as xs:string* {
  for $ch in string-to-codepoints($arg)
  return codepoints-to-string($ch)
};

(functx:chars("a b c"))
