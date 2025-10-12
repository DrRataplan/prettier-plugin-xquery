declare function local:scramble (
  $x as function (xs:string) as xs:string,
  $y as xs:string
) as xs:string {
  $x($y)
};

local:scramble(
  function ($x) {
    translate($x, "abcdefghijklmnopqrstuvwxyz", "nopqrstuvwxyzabcdefghijklm")
  },
  "john"
)
