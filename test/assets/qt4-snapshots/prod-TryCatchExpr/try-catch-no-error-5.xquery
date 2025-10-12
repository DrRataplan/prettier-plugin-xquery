try { 0 } catch err:FOAR0001 { "No error" }catch *:FOAR0001 {
  "No error "
}catch err:* { "No error " }catch * { "No error " }
