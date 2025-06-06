let $inventory :=
  map {
    "name": "car",
    "id": "QZ123",
    "parts": [map {"name": "engine", "id": "YW678", "parts": []}]
  }

return map:find($inventory, "parts")
