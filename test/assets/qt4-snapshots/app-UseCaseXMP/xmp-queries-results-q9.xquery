<results>
  {
    for $t in //(chapter | section)/title
    where contains(exactly-one($t/text()), "XML")
    return $t
  }
</results>
