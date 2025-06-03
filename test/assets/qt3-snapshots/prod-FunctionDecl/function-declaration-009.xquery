declare function local:fact ($n as xs:integer) as xs:integer {
  if ($n < 2) then
    1
  else
    $n * local:fact(($n) - 1)
};

<table>
  {
    for $i in 1 to 10
    return <tr><td>{
            $i
          }! = {
            local:fact($i)
          }</td></tr>
  }
</table>
