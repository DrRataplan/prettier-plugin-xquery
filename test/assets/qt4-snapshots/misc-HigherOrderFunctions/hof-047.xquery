declare function local:splitter (
  $x as xs:string
) as (function () as xs:string*)* {
  for $sep in ("\s", ",", "!")
  return function () {
      for $i in tokenize($x, $sep)
      return let $f := function () { concat($sep, ":", upper-case($i)) }
        return $f()
    }
};

<out>
  {
    for $f as function(*) in
      local:splitter("How nice! Thank you, I enjoyed that.")
    return <tokens>
        {
          for $t in $f()
          return <t>{ $t }</t>
        }
      </tokens>
  }
</out>
