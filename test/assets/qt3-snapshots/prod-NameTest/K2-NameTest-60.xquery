declare variable $input := <e />;

empty(
  for $PI as processing-instruction() in $input//processing-instruction()
  return $PI
)
