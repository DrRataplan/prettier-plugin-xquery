try {
  fn:error()
} catch * {
  if (count($err:column-number) eq 1) then
    $err:column-number
  else
    0
}
