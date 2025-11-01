declare function local:f ($z as xs:string) {
  every
    $a in
    ($z, "x", $z, "y", xs:anyURI("u"))[string-length(.) gt 1] satisfies
    ($a instance of xs:string)
};

declare variable $data := (
  xs:anyURI("http://example.com/"), "http://example.com/"
);

local:f($data[round(year-from-date(current-date()) idiv 2000)])
