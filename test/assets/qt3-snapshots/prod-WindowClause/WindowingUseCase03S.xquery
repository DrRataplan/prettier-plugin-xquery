<doc>{
    for tumbling window $w in ./doc/*
      start $x when $x[self::dt]
      end $y
      next $z when $y[self::dd] and $z[self::dt]
    return <term>{
          $w
        }</term>
  }</doc>
