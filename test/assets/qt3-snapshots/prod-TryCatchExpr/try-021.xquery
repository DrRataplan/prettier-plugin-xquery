declare function local:f ($d as xs:integer) {
  10 div $d
};

try { local:f(0) } catch * { "caught " || count($err:additional) }
