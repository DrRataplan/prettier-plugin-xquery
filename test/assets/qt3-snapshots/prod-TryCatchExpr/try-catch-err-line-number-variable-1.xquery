try { fn:error() } catch * {
  let $n := $err:line-number
  return true()
}
