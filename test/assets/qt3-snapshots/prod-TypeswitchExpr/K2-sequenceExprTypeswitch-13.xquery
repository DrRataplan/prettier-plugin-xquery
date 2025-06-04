declare variable $i := (<e />, attribute name {
    "content"
  }, <a attr="content" />, <e />, 1, "str", <!-- a comment -->);

<d> {
    typeswitch (typeswitch ($i)
      case $b as element(e) return
        concat("Found an element by name ", $b)
      case $b as element() return
        comment {
          concat("Found: ", $b)
        }
      case $c as attribute(doesntMatch) return
        $c/..

      default return
        $def)
      case $str as xs:string return
        "A string"
      case $attr as attribute() return
        string($attr)

      default return
        $def
  } </d>
