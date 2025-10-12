declare function local:scramble (
  $x as function (xs:string) as xs:string,
  $y as xs:string
) as xs:string {
  $x($y)
};

declare function local:rot13 ($x as xs:string) as xs:string {
  translate($x, "abcdefghijklmnopqrstuvwxyz", "nopqrstuvwxyzabcdefghijklm")
};

local:scramble(local:rot13#1, "mike")
