declare decimal-format exp-e exponent-separator = "e";

let $x := fn:format-number(12345.678, "9.9999E999", "exp-e")
return $x
