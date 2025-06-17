declare function local:f ($d as xs:integer) {
  10 div $d
};

declare variable $t := "text";

try { local:f(0) } catch * {
  try { local:f($t cast as xs:integer) } catch * {
    local-name-from-QName($err:code)
  }
}
