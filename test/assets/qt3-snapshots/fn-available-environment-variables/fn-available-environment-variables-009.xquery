let $first :=
  <all>
    {
      for $e in fn:available-environment-variables()
      order by $e
      return <v name="$i">{ fn:environment-variable($e) }</v>
    }
  </all>,
  $second :=
  <all>
    {
      for $e in fn:available-environment-variables()
      order by $e
      return <v name="$i">{ fn:environment-variable($e) }</v>
    }
  </all>
return deep-equal($first, $second)
