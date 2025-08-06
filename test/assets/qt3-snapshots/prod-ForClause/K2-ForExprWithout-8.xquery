(
  for $d in
    <people>
      <person id="person0"><name>First</name></person>
      <person><name>Second</name></person>
    </people>/person
  return if (
    some
      $id in
      1 satisfies
      typeswitch ($d/@id)
        case $n as node() return
          $d/@id = "person0"

        default return
          ()
  ) then
    $d/name
  else (
  )
)
