declare function local:repeat ($count as xs:integer, $arg as xs:string) {
  for $x in 1 to $count
  return $arg
};

fn:boolean(text { local:repeat(0, "string") })
