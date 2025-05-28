declare variable $in := (<doc><A /><B />{
      (1 to 10000)!<C />
    }<B /><A /></doc>)/*;

declare variable $fsm := map {
  0:
    function ($x) {
      if ($x[self::B]) then
        1
      else
        0
    },
  1:
    function ($x) {
      if ($x[self::B]) then
        1
      else
        2
    },
  2:
    function ($x) {
      if ($x[self::B]) then
        3
      else
        2
    },
  3: function ($x) {
      3
    }
};

fold-left($in, 0, function ($state, $node) {
    $fsm($state)($node)
  }) ne 3
