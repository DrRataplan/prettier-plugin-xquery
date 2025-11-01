declare function local:f ($z as xs:string) {
  $z = xs:anyURI("http://example.com/")
};

local:f(xs:anyURI("http://example.com/"))
