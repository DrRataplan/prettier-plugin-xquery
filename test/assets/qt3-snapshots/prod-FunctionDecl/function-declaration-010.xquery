declare function local:prnt (
  $n as xs:integer,
  $n2 as xs:string,
  $n3 as xs:date,
  $n4 as xs:long,
  $n5 as xs:string,
  $n6 as xs:decimal
) {
  if ($n < 2) then
    1
  else
    concat($n, " ", $n2, " ", $n3, " ", $n4, " ", $n5, " ", $n6)
};

<table>
  {
    <td>Value is = {
        local:prnt(
          4,
          xs:string("hello"),
          xs:date("2005-02-22"),
          xs:long(5),
          xs:string("well"),
          xs:decimal(1.2)
        )
      }
    </td>
  }
</table>
