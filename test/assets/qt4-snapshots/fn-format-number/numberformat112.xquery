declare decimal-format exp-p percent = "!" exponent-separator = "%";

let $x := fn:format-number(12345.678, "9.9999%999", "exp-p")
return $x
