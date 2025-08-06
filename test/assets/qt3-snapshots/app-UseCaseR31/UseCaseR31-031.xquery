<html>
  <body>
    <table>
      <tr> (: Column headings :)
         {
          <th />,
          for $th in
            json-doc(
              "http://www.w3.org/qt3/app/UseCaseR31/table-json"
            )?col-labels?*
          return <th>{ $th }</th>
        }
      </tr>
      { (: Data for each row :)
        for $r at $i in
          json-doc("http://www.w3.org/qt3/app/UseCaseR31/table-json")?data?*
        return <tr>
          {
            <th>
              {
                json-doc(
                  "http://www.w3.org/qt3/app/UseCaseR31/table-json"
                )?row-labels[$i]
              }
            </th>,
            for $c in $r?*
            return <td>{ $c }</td>
          }
        </tr>
      }
    </table>
  </body>
</html>
