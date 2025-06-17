declare construction preserve;
declare copy-namespaces no-preserve ,  inherit;

import schema namespace ns =  "http://www.example.com/test/namespace-sensitive";

let $node := <e xmlns:bar="http://www.example.org/bar">{ //ns:insensitive }</e>
return data($node//ns:insensitive) instance of ns:myString
