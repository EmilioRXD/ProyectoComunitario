
import { createClient } from 'jsr:@supabase/supabase-js@2'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://bptstnuslddxmbsbenpm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdHN0bnVzbGRkeG1ic2JlbnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5NTQ2MjQsImV4cCI6MjAzNzUzMDYyNH0.efhMi9nfxrcgRhg4LAF4pCCrZ8FH5DzML-xIf7Ku1-M')


const { data, error } = await supabase
  .from('countries')
  .select()
