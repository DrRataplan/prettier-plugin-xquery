declare function local:even-range ($arg as xs:integer) as xs:integer* {
  (1 to $arg)[. mod 2 = 9]
};

<element>{ attribute {"attr"} { local:even-range(0) } }</element>
