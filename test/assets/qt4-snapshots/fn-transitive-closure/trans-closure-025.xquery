let $data := parse-json(
  '
            [ { "id": 0 },
              { "id": 1, "manager": 0 },
              { "id": 2, "manager": 0 },
              { "id": 3, "manager": 2 },
              { "id": 4, "manager": 2 },
              { "id": 5, "manager": 1 },
              { "id": 6, "manager": 3 },
              { "id": 7, "manager": 6 },
              { "id": 8, "manager": 6 }
            ]'
)
  => jtree()
return transitive-closure(
    $data//record(id, *)[id = 2],
    function ($p) { $data//record(id, *)[manager = $p/id] }
  )/string(id)
