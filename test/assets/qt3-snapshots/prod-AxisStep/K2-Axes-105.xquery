let $x := document { <a><b /></a> }, $a := $x/a, $b := $a/b
return <out
    p="{ exists($x/self::document-node()) }"
    q="{ exists($x/document-node()) }"
    r="{ exists($a/parent::document-node()) }"
    s="{ exists($b/ancestor::document-node()) }"
    t="{ exists($b/parent::document-node()) }"
    u="{ exists($b/preceding::document-node()) }" />
