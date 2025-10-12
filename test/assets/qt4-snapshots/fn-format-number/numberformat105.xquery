declare decimal-format exp-E exponent-separator = "E";

let $x := fn:format-number(12345.678, "9.9999E999", "exp-E")
return $x
