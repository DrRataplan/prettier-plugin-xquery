declare function local:f ($in as xs:anyAtomicType) as xs:boolean {
  $in instance of xs:decimal
};

local:f(validate type xs:integer { <a>12</a> })
