try { fn:error() } catch * {
  let $n := $err:module
  return true()
}
