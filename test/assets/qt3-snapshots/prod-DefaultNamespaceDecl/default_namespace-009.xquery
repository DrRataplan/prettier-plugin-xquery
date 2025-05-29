declare default function namespace "http://example.org";

declare function fact ($n as xs:integer) as xs:integer {
  if ($n < 2) then
    1
  else
    $n * fact(($n) - 1)
};

<table> {
    for $i in 1 to 10
    return <tr> <td>{
            $i
          }! = {
            fact($i)
          }</td> </tr>
  } </table>
