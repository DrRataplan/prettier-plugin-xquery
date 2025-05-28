declare
  variable $i := <root> <child> <preceding2 /> <child2> <preceding1 /> <child3> <leaf /> </child3> <following /> </child2> <following /> </child> <following /> </root>;

empty(root($i)/preceding::node())
