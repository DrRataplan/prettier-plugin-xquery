xquery version "3.0";

declare variable $in := 25;

declare variable $zero := 0;

<out>{
    switch ($in)
      case 42 return
        "Quack"
      case 25 return
        "Baa"
      case $in div $zero return
        "Neigh"
      default return
        "Woof"
  }</out>
