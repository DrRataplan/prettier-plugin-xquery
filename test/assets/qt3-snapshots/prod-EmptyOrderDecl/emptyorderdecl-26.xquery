declare default order empty least;

for $i in (<a>1</a>, <a>4</a>, <a />, <a>7</a>)
order by $i/text() ascending empty greatest
return $i
