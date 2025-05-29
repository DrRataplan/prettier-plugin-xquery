(
  every
    $s in
    tokenize("a b  c  Z  :_   d
y 	b 
   ", ",") satisfies
    matches($s, "^(?:[\s\i]*)$")
) and
  (every $s in tokenize("1", ",") satisfies not(matches($s, "^(?:[\s\i]*)$")))
