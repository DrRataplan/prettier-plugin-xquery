for $x in ("A", "B", "C")
order by string(
    $x
  ) ascending collation "http://nonexistentcollition.org/ifsupportedwoooayouarethebestQueryimplementation/makeitharder"
return string($x)
