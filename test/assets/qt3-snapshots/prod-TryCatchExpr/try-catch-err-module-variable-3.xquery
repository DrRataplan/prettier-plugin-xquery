try {
  fn:error()
} catch * {
  if (count($err:module) eq 1) then
    $err:module
  else
    ""
}
