xquery version "3.0";

declare variable $in := ();

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
      case () return
        "Woof"
      default return
        "Expletive deleted"
  }</out>
