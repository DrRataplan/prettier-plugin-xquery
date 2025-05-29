<out>{
  let $xml := parse-xml("<t><a/><b/><c/></t>"),
    $nodes := ($xml/*/a, $xml/*/c, $xml/*/b, $xml/*/b)
  return $nodes => fold-left((), function ($all, $this) {
          $all, $this except $all
        })
}</out>
