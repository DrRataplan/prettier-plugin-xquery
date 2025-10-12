import schema namespace ids =  "http://www.w3.org/XQueryTest/ididrefs";

<out
  xmlns="http://www.w3.org/XQueryTest/ididrefs"
  xmlns:i="http://www.w3.org/XQueryTest/ididrefs"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
>
  {
    for $z in
      tokenize(
        "alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu",
        "\s"
      )
    return element {$z} {
        idref($z, (/))[self::attribute()], idref($z, (/))[self::element()]
      }
  }
</out>
