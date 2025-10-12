try { fn:error() } catch * {
  let $n := $err:column-number
  return true()
}
