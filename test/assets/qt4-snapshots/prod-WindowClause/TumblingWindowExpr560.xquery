declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare variable $chunk-size external;

declare option output:method "xml";
declare option output:indent "yes";

let $results :=
  for tumbling window $chunk in /*/*
    start at $sp when $sp mod $chunk-size = 1
  return document { element {node-name(head($chunk)/..)} { $chunk } }
return $results instance of document-node()+
