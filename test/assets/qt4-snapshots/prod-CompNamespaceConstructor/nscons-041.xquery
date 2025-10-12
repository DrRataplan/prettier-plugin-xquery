import schema namespace cnc =  "http://www.w3.org/TestSchemas/cnc";

let $xs := namespace xs { "http://www.w3.org/2001/XMLSchema" },
  $val := validate { <cnc:value xsi:type="xs:int">{ $xs, 10 }</cnc:value> }
return data($val) instance of xs:int
