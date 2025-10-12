declare function local:range ($arg as xs:integer) as xs:integer* {
  1 to $arg
};

declare function local:double ($arg as xs:integer+) {
  for $a in $arg
  return $a * 2
};

local:double(local:range(2) treat as xs:integer+)
