for $var in ("a", "b", "c")
where fn:max(($var, 1))
return $var
