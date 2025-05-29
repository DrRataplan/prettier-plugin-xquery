xquery version "3.0";

declare variable $animal := "Cat";

<out>{
  switch ($animal)
    case "Cow" return
      "Moo"
    case "Cat" return
      "Meow"
    case "Duck" return
      "Quack"
    default return
      "What's that odd noise?"
}</out>
