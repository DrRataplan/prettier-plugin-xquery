<result> {
  let $x := //xref[@xrefid = "top4"], $t := //title[. << exactly-one($x)]
  return $t[last()]
} </result>
