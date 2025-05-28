deep-equal(
  (<b />, <b />, <b />, <b />),
  (
    for $v1 in (1, 2, 3, 4)
    let $v2 := <b />
    return ($v2)
  )/.
)
