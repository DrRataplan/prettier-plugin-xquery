declare namespace my = "http://example.com/MyNamespace/";

declare variable $my:error-qname := QName("http:example.org/", "prefix:ncname");

declare function my:error ($choice, $msg as xs:string) as empty-sequence() {
  if ($choice) then
    error($my:error-qname, concat("No luck: ", $msg))
  else (
  )
};

empty((my:error(false(), "msg"), my:error(false(), "The message")))
