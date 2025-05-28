xquery version "3.0";

declare variable $number := 42;

<out>{
    switch ($number)
      case 21 return
        "Moo"
      case current-time() return
        "Meow"
      case 42 return
        "Quack"
      default return
        3.14159
  }</out>
