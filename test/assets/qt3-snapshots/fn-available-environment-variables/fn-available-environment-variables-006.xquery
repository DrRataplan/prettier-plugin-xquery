(
  for $e in fn:available-environment-variables()
  return fn:environment-variable($e) instance of xs:string
) =
  (false())
