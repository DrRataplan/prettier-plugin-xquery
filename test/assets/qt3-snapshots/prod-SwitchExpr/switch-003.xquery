xquery version "3.0";

declare variable $animal := "!?!?";

<out>{
  switch (upper-case($animal))
    case "COW" return
      "Moo"
    case "CAT" return
      "Meow"
    case "DUCK" return
      "Quack"
    case lower-case($animal) return
      "Oink"
    default return
      "What's that odd noise?"
}</out>
