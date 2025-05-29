xquery version "3.0";

declare variable $in := 2;

<out>{
  switch (1 to $in)
    case 1 return
      "Moo"
    case 2 return
      "Meow"
    case 3 return
      "Quack"
    case 4 return
      "Oink"
    default return
      "Baa"
}</out>
