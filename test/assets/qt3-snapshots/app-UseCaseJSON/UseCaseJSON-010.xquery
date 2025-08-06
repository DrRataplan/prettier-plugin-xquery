<html>
  <body>
    <table>
      <tr>
        { (: Column headings :)
          <th />,
          for $th in json-doc("table.json")("col labels")?*
          return <th>{ $th }</th>
        }
      </tr>
      { (: Data for each row :)
        for $r at $i in json-doc("table.json")("data")?*
        return <tr>
          {
            <th>{ json-doc("table.json")("row labels")[$i] }</th>,
            for $c in $r?*
            return <td>{ $c }</td>
          }
        </tr>
      }
    </table>
  </body>
</html>
