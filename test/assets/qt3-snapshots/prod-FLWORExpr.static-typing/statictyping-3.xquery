for $var in ("a", "b", "c")
where fn:avg(($var, 1))
return $var
