(
  every
    $s in
    tokenize("	a 

 
	b, a  b, a  b ,	a 

 
b", ",") satisfies
    matches($s, "^(?:(\t|\s)a(\r\n|\r|\n|\s)+(\s|\t)b(\s|\r\n|\r|\n)*)$")
) and
  (
    every
      $s in
      tokenize(" a b, a b ", ",") satisfies
      not(matches($s, "^(?:(\t|\s)a(\r\n|\r|\n|\s)+(\s|\t)b(\s|\r\n|\r|\n)*)$"))
  )
