xquery version "3.0";

declare variable $in := "42";

<out>{
  switch ($in)
    case 42 return
      "Moo"
    case <a>42</a> return
      "Meow"
    case 42e0 return
      "Quack"
    case "42e0" return
      "Oink"
    default return
      "Expletive deleted"
}</out>
