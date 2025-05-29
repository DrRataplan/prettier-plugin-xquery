declare namespace functx = "http://www.example.com/";

(:~ : Returns the scheme from a URI : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_scheme-from-uri.html : @param $uri the URI :)
declare function functx:scheme-from-uri ($uri as xs:string?) as xs:string? {
  substring-before($uri, ":")
};

(functx:scheme-from-uri("http://www.datypic.com"))
