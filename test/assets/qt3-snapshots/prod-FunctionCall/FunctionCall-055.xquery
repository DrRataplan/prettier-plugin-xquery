declare function local:product ($s as xs:double+) as xs:double {
  if (not($s[2])) then
    $s[1]
  else
    $s[1] * local:product($s[position() > 1])
};

local:product((1, "2", 3)) (: '2' is not xs:double, error should be raised :)
