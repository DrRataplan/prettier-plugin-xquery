fn:trace(
  (
    for $var in (fn:upper-case("a"), fn:lower-case("B"))
    return (fn:lower-case($var), fn:upper-case($var))
  ),
  "The value of the complex expression on the other argument is:"
)
