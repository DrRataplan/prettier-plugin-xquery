let $prod1 := <product dept='MEN' id='P123'> <number>784</number> </product>
return let $prod2 :=
    <product id='P123' dept='MEN'><!--comment--> <number>784</number> </product>
  return (deep-equal(1, 1))
