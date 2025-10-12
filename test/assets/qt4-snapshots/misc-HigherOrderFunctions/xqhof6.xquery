declare function local:curry (
  $f as function (item()*, item()*) as item()*
) as function (item()*) as function (item()*) as item()* {
  function ($a) { $f($a, ?) }
};

local:curry(substring-after#2)("foobar")("foo")
