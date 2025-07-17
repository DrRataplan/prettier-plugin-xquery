declare variable $n external;

<out>
  {
    string-join(
      for $x allowing empty in 1 to $n
      return concat("[", $x, "]"),
      "|"
    )
  }
</out>
