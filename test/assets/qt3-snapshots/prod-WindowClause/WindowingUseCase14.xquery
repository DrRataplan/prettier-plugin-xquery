<result>
  {
    for tumbling window $w in ./rss/channel/item
      start $first when fn:true()
      end next $lookAhead when $first/author ne $lookAhead/author
    where count($w) ge 3
    return <annoying-author>{ $w[1]/author }</annoying-author>
  }
</result>
