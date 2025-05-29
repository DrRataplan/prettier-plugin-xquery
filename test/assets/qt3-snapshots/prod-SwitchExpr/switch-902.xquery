xquery version "3.0";

declare variable $in := 2;

<out>{
  switch ($in)
    case 1 return
      "Moo"
    case 5 return
      "Meow"
    case 3 return
      "Quack"
    case ($in to 4) return
      "Oink"
    default return
      "Baa"
}</out>
