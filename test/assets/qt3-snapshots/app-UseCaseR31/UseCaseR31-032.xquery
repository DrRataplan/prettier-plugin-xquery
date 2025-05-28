<table>{
    for tumbling window $w in json-doc(
      "http://www.w3.org/qt3/app/UseCaseR31/colors-json"
    )?colors?*
      start at $x when fn:true()
      end at $y when $y - $x = 2
    return <tr>{
          for $i in $w?color
          return <td>{
                $i
              }</td>
        }</tr>
  }</table>
