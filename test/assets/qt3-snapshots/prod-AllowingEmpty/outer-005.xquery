declare variable $n as xs:integer external := 10;

<out>
  {
    string-join(
      for $x allowing empty in 1 to $n
      return concat("[", $x, "]"),
      "|"
    )
  }
</out>
