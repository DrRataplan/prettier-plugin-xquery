try {
  fn:error()
} catch * {
  if (count($err:line-number) eq 1) then
    $err:line-number
  else
    0
}
