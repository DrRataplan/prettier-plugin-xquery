declare variable $d1 := document {
  ()
};

declare variable $d2 := document {
  <?target data?>
};

deep-equal($d1, $d2)
