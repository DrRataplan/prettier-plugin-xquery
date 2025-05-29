declare function local:square ($n as xs:integer) {
  $n * $n
};

apply(local:square#1, [10])
