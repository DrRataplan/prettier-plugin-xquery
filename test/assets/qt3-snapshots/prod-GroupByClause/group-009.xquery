<out>
  {
    for $x in //employee
    let $key := $x/empnum
    group by $key
        collation
          "http://www.w3.org/2005/xpath-functions/collation/codepoint"
    order by $key
    return <group count="{ count($x) }" key="{ $key }">
      { string-join($x/pnum, "|") }
    </group>
  }
</out>
