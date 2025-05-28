declare
  variable $i := <root> <child> <preceding2 /> <child2> <preceding1 /> <child3> <leaf /> </child3> <following /> </child2> <following /> </child> <following /> </root>;

root($i)//leaf/preceding::node()[1]
