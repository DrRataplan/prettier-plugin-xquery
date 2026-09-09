xquery version "3.0";

declare variable $animal as xs:string := "duck";

<out>
  {
    switch (upper-case($animal))
      case "COW" return
        "Moo"
      case "CAT" return
        "Meow"
      case "DUCK"
      case "GOOSE" return
        "Quack"
      case "PIG"
      case "SWINE" return
        "Oink"
      default return
        "What's that odd noise?"
  }
</out>
