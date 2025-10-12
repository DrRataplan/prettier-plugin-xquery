declare decimal-format Q{http://www.example.com/ns}format grouping-separator = "'";

<a xmlns:ex="http://www.example.com/ns">
  { format-number(1e9, "#'###'###'##0.00", "ex:format") }
</a>
