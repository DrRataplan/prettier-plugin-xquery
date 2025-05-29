<r> {
    let $i := <e> <a /> <b /> <c /> </e>/a, $t := $i/following-sibling::b
    return (($i intersect ($i, $i)), (($t, $t) intersect $t))
  } </r>
