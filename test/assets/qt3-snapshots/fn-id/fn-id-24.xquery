let $data := document {
  <stuff>
    <thing xml:id=" a123 ">once</thing>
    <thing xml:id=" a456 ">twice</thing>
    <thing xml:id=" 789x ">thrice</thing>
  </stuff>
}
return $data/id("a123")/string()
