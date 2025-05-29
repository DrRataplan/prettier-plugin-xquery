for $var in ("a", "b", "c")
where fn:sum(($var, 1))
return $var
