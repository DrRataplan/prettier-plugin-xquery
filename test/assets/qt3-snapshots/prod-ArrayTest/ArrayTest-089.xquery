declare function local:f ($a as array(xs:integer)) as xs:boolean {
  array:size($a) eq 1
};

declare function local:g ($n as xs:integer) as array(xs:string) {
  array{
    (1 to $n)!"x"
  }
};

local:f(local:g(0))
