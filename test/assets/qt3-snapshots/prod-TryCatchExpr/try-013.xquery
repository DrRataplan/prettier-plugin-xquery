declare function local:f ($d as xs:integer) {
  10 div $d
};

try {
  local:f(0)
} catch * {
  $err:column-number, $err:line-number, $err:line-number
}
