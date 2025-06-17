declare namespace err = "http://www.w3.org/2005/xqt-errors";

<results>
  {
    for $t in /tests/test
    return try {
        let $matches := matches($t/@input, $t/@regex, string($t/@flags))
        return if (
            $matches (:trace($matches, $t/@id):) and $t/@result ne "y"
          ) then
            <fail>{ $t }</fail>
          else if (not($matches) and $t/@result ne "n") then
            <fail>{ $t }</fail>
          else (
          )
      } catch * {
        if ($t/@result = ("y", "n")) then
          <fail error="{ $err:code }">{ $t }</fail>
        else (
        )
      }
  }
</results>
