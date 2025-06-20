declare namespace fn = "sudoku";

declare variable $board := (
  1,
  0,
  0,
  3,
  0,
  0,
  6,
  0,
  0,
  0,
  2,
  0,
  5,
  0,
  0,
  0,
  0,
  4,
  0,
  0,
  9,
  0,
  0,
  0,
  5,
  2,
  0,
  0,
  0,
  0,
  9,
  6,
  3,
  0,
  0,
  0,
  7,
  1,
  6,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  8,
  0,
  0,
  4,
  0,
  9,
  0,
  0,
  0,
  0,
  5,
  3,
  0,
  7,
  8,
  0,
  0,
  4,
  0,
  6,
  0,
  0,
  0,
  3,
  5,
  0,
  0,
  0,
  0,
  0,
  0,
  1
);

declare variable $rowStarts := (1, 10, 19, 28, 37, 46, 55, 64, 73);

declare variable $groups := (
  1,
  1,
  1,
  2,
  2,
  2,
  3,
  3,
  3,
  1,
  1,
  1,
  2,
  2,
  2,
  3,
  3,
  3,
  1,
  1,
  1,
  2,
  2,
  2,
  3,
  3,
  3,
  4,
  4,
  4,
  5,
  5,
  5,
  6,
  6,
  6,
  4,
  4,
  4,
  5,
  5,
  5,
  6,
  6,
  6,
  4,
  4,
  4,
  5,
  5,
  5,
  6,
  6,
  6,
  7,
  7,
  7,
  8,
  8,
  8,
  9,
  9,
  9,
  7,
  7,
  7,
  8,
  8,
  8,
  9,
  9,
  9,
  7,
  7,
  7,
  8,
  8,
  8,
  9,
  9,
  9
);

declare function fn:getRow (
  $board as xs:integer+,
  $index as xs:integer
) as xs:integer+ {
  let $rowStart := floor(($index - 1) div 9) * 9
  return one-or-more(
      $board[position() > $rowStart and position() <= $rowStart + 9]
    )
};

declare function fn:getCol (
  $board as xs:integer+,
  $index as xs:integer
) as xs:integer+ {
  let $gap := ($index - 1) mod 9,
    $colIndexes :=
      for $x in $rowStarts
      return $x + $gap
  return one-or-more($board[position() = $colIndexes])
};

declare function fn:getGroup (
  $board as xs:integer+,
  $index as xs:integer
) as xs:integer+ {
  let $group := $groups[$index]
  return one-or-more(
      $board[for $x in position()
      return $groups[$x] = $group]
    )
};

declare function fn:getAllowedValues (
  $board as xs:integer+,
  $index as xs:integer
) as xs:integer* {
  let $existingValues := (
    fn:getRow($board, $index),
    fn:getCol($board, $index),
    fn:getGroup($board, $index)
  )
  return for $x in (1 to 9)
    return if (not($x = $existingValues)) then
        $x
      else (
      )
};

declare function fn:tryValues (
  $board as xs:integer+,
  $emptyCells as xs:integer+,
  $possibleValues as xs:integer+
) as xs:integer* {
  let $index as xs:integer := $emptyCells[1],
    $newBoard as xs:integer+ := (
      $board[position() < $index],
      $possibleValues[1],
      $board[position() > $index]
    ),
    $result as xs:integer* := fn:populateValues(
      $newBoard,
      $emptyCells[position() != 1]
    )
  return if (empty($result)) then
      if (count($possibleValues) > 1) then
        fn:tryValues(
          $board,
          $emptyCells,
          one-or-more($possibleValues[position() != 1])
        )
      else (
      )
    else
      $result
};

declare function fn:populateValues (
  $board as xs:integer+,
  $emptyCells as xs:integer*
) as xs:integer* {
  if (not(empty($emptyCells))) then
    let $index as xs:integer := exactly-one($emptyCells[1]),
      $possibleValues as xs:integer* := distinct-values(
        fn:getAllowedValues($board, $index)
      )
    return if (count($possibleValues) > 1) then
        fn:tryValues(
          $board,
          one-or-more($emptyCells),
          one-or-more($possibleValues)
        )
      else if (count($possibleValues) = 1) then
        let $newBoard as xs:integer+ := (
          $board[position() < $index],
          exactly-one($possibleValues[1]),
          $board[position() > $index]
        )
        return fn:populateValues($newBoard, $emptyCells[position() != 1])
      else (
      )
  else
    $board
};

declare function fn:solveSudoku ($startBoard as xs:integer+) as xs:integer+ {
  let $emptyCells as xs:integer* :=
      for $x in (1 to 81)
      return if ($startBoard[$x] = 0) then
          $x
        else (
        ),
    $endBoard as xs:integer* := fn:populateValues($startBoard, $emptyCells)
  return if (empty($endBoard)) then
      $startBoard
    else
      one-or-more($endBoard)
};

declare function fn:drawResult ($board as xs:integer+) as element() {
  <html>
    <head>
      <title>Sudoku - XSLT</title>
      <style
      >table {{ border-collapse: collapse; border: 1px solid black; }} td {{ padding: 10px; }} .norm {{ border-left: 1px solid #CCC; border-top: 1px solid #CCC; }} .csep {{ border-left: 1px solid black; }} .rsep {{ border-top: 1px solid black; }}</style>
    </head>
    <body>{ fn:drawBoard($board) }</body>
  </html>
};

declare function fn:drawBoard ($board as xs:integer+) as element() {
  <table>
    {
      for $i in 1 to 9
      return <tr>
          {
            for $j in 1 to 9
            let $pos := (($i - 1) * 9) + $j
            return <td
                class="{
                  if ($p mod 3 = 1) then
                    "csep"
                  else (
                    "norm"
                  )
                } {
                  if ($i mod 3 = 1) then
                    "rsep"
                  else (
                    "norm"
                  )
                }"
              >{ $board[$pos] }</td>
          }
        </tr>
    }
  </table>
};

fn:drawResult(fn:solveSudoku($board))
