declare function local:repeat (
  $count as xs:integer,
  $arg as xs:string
) as item()* {
  if ($count lt 0) then
    "$count must not be negative"
  else
    text {
      for $x in 1 to $count
      return $arg
    }
};

fn:boolean(local:repeat(0, "string"))
