import schema  "http://www.w3.org/2005/xpath-functions";

let $json :=
'
           {
             "a" : "foo",
             "b" : 123,
             "c"   : null,
             "d"   : true,
             "e" : false,
             "f" : [1],
             "g" : {}
           }
         '
let $xml := json-to-xml($json, map {"validate": true()})/fn:map
return (
    $xml/fn:string instance of element(fn:string, fn:stringType),
    $xml/fn:number instance of element(fn:number, fn:numberType),
    not($xml/fn:null instance of element(fn:null, fn:nullType)),
    $xml/fn:boolean instance of element(fn:boolean, fn:booleanType)+,
    $xml/fn:map instance of element(fn:map, fn:mapType),
    $xml/fn:array instance of element(fn:array, fn:arrayType)
  )
