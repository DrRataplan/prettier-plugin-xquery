let $para :=
  <para>In a hole in the ground there lived a <term
      author="Tolkien"
    >hobbit</term>.</para>

return data($para/term/@author)
