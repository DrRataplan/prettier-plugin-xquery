declare
  variable $i := <root> <child /> <child /> <child> <child2> <child3> <leaf /> </child3> </child2> </child> </root>;

1, root($i)//leaf/child::node(), 1
