declare default order empty greatest;

for $i in (<a>1</a>, <a>4</a>, <a />, <a>7</a>)
order by zero-or-one($i/text()) descending
return $i
