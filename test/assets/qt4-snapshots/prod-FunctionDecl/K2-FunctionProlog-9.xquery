declare function local:multiplySequence ($input as xs:integer*) as xs:integer {
  if (empty($input)) then
    1
  else
    $input[1] * local:multiplySequence($input[position() != 1])
};

local:multiplySequence((1, 2, 3, 4, 5))
