declare variable $i := <root>
  <child>
    <child2><child3><leaf /></child3><following /></child2>
    <following />
  </child>
  <following />
</root>;

empty(root($i)//leaf/preceding::node())
