xquery version "3.0";

declare variable $in := <a>42</a>;

<out>{
  switch ($in)
    case 42 return
      "Moo"
    case "42" return
      "Meow"
    case 42e0 return
      "Quack"
    case "42e0" return
      "Oink"
    default return
      "Expletive deleted"
}</out>
