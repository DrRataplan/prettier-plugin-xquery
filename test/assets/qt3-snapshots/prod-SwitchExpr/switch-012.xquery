xquery version "3.0";

declare variable $in := 25;

declare variable $zero := 0;

<out>{
  switch ($in)
    case 42 return
      $in div $zero
    case 25 return
      "Baa"
    case 39 return
      $in div $zero
    default return
      "Woof"
}</out>
