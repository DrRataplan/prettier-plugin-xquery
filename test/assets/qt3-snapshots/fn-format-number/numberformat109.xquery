declare decimal-format exp-bizarre exponent-separator = "✐";

let $x := fn:format-number(12345.678, "9.9999✐999", "exp-bizarre")
return $x
