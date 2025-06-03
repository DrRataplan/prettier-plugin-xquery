declare variable $i := <root>
  <child />
  <child />
  <child><child2><child3><leaf /></child3></child2></child>
</root>;

root($i)//(following-sibling::node(), "BOO")
