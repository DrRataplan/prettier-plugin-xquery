declare variable $input-context := .;

declare function local:one_level ($p as element()) as element() {
  <part partid="{
    $p/@partid
  }" name="{
    $p/@name
  }" > {
    for $s in ($input-context//part)
    where $s/@partof = $p/@partid
    return local:one_level($s)
  } </part>
};

<parttree> {
  for $p in //part[empty(@partof)]
  return local:one_level($p)
} </parttree>
