for $var in ("a", "b", "c")
where fn:min(($var, 1))
return $var
