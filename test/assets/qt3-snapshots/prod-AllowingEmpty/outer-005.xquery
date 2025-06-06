declare variable $n external;

<out>
  {
    string-join(
      for $x in 1 to $n
      return concat("[", $x, "]"),
      "|"
    )
  }
</out>
