let $i :=
  document { <e><e /><e /><e /><e /><e /><e /><e /><b xml:id="foo" /><e /></e> }
return id("foo", $i)/name()
