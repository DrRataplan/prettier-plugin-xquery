fn:trace(
  (
    for $var in (/works//hours)
    return $var + $var
  ),
  "The Value of the given expression is: "
)
