declare copy-namespaces preserve ,  no-inherit;

declare variable $e1 := <e1 xmlns:namespace1="http://www.namespace1.com" />;

declare variable $e2 := <e2 xmlns:namespace2="http://www.namespace2.com">
  { $e1 }
</e2>;

for $n in <e3 xmlns:namespace3="http://www.namespace3.com">{ $e2 }</e3>/e2/e1,
  $ps in in-scope-prefixes($n)
order by $ps
return $ps,
"|",
for $n in
  <e3 xmlns:namespace3="http://www.namespace3.com">
    {
      <e2 xmlns:namespace2="http://www.namespace2.com">
        { <e1 xmlns:namespace1="http://www.namespace1.com" /> }
      </e2>
    }
  </e3>/e2/e1,
  $ps in in-scope-prefixes($n)
order by $ps
return $ps
