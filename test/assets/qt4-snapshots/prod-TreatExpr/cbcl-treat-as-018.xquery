declare function local:range ($arg as xs:integer) as xs:integer* {
  1 to $arg
};

declare function local:double ($arg as xs:integer?) {
  $arg * 2
};

empty(local:double(local:range(0) treat as xs:integer?))
