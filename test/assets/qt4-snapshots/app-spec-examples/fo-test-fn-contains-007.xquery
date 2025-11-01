let $coll :=
"http://www.w3.org/2013/collation/UCA?lang=en;alternate=blanked;strength=primary"
return contains((), "--***-*---", $coll)
