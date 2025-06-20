declare namespace functx = "http://www.example.com/";

(:~
 : Returns the fragment from a URI : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_fragment-from-uri.html : @param $uri the URI
 :)
declare function functx:fragment-from-uri ($uri as xs:string?) as xs:string? {
  substring-after($uri, "#")
};

(
  functx:fragment-from-uri("http://datypic.com/index.htm#abc"),
  functx:fragment-from-uri("http://datypic.com/index.htm")
)
