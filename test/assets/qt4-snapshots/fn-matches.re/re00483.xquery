(
  every
    $s in
    tokenize("  	

a c
	
 a 

	   
,aa a", ",") satisfies
    matches($s, "^(?:\s*\c\s?\c\s+\c\s*)$")
) and
  (
    every
      $s in
      tokenize(" a  a a,aaa, a aa ", ",") satisfies
      not(matches($s, "^(?:\s*\c\s?\c\s+\c\s*)$"))
  )
