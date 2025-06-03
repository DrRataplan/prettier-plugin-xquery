<result>
  {
    for $id in //xref/@xrefid
    return //topic[@topicid = $id]
  }
</result>
