<table>
  {
    for tumbling window $w in json-doc("colors.json")?*
      start at $x when fn:true()
      end at $y when $y - $x = 2
    return <tr>
      {
        for $i in $w
        return <td>{ $i?color }</td>
      }
    </tr>
  }
</table>
