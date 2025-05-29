<tbody> {
  let $rows :=
    <tables> <table> <row> <entry>Acetazolamide</entry> <entry>Acetazolamide</entry> </row> <row> <entry>Acetazolamide sodium</entry> <entry>Acetazolamide sodium</entry> </row> </table> <table> <row> <entry>Acetylcholine chloride</entry> <entry>Acetylcholine chloride</entry> </row> </table> <table> <row> <entry>Acetylcysteine</entry> <entry>Acetylcysteine</entry> </row> <row> <entry>Acetylcysteine sodium</entry> <entry>Acetylcysteine sodium</entry> </row> </table> </tables>/table/row
  return for $g in distinct-values($rows/entry[2][string(.)])
    order by $g
    return let $matches :=
        for $row in $rows
        where $g = string($row/entry[2][string(.)])
        return $row/entry[1]
      return <entry> {
          $matches/(
            <link> {
              node()
            } </link>,
            text {
              if (position() lt last()) then
                "; "
              else (
              )
            }
          )
        } </entry>
} </tbody>
