let $i := <html>
  <head />
  <body><p attr="foo" /><p attr="boo" /><p /><p /><p /></body>
</html>
return $i//p[1]/following::*
