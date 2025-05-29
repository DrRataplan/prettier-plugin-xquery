declare namespace my = "http://example.com/MyNamespace/";

declare variable $my:error-qname := QName(
  "http://example.com/MyErrorNS",
  "my:qName"
);

declare function my:error ($msg as xs:string) as empty-sequence() {
  error($my:error-qname, concat("No luck: ", $msg))
};

my:error("The message")
