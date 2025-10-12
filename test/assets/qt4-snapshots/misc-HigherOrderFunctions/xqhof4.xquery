declare function local:hof ($s, $f as function(*)) {
  $f($s[1], $s[2])
};

local:hof(("1", "2"), concat#2)
