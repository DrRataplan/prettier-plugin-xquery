declare variable $in := <in>
  <e on="2017-09-18" />
  <e on="2016-04-15" />
  <e on="2012-07-09" />
</in>;

for $j in ($in//e/@on, xs:date("1999-12-17"))
order by $j
return $j
