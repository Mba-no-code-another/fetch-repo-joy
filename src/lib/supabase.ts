import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vqcifxnptcralkljztmm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxY2lmeG5wdGNyYWxrbGp6dG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzQwNDUsImV4cCI6MjA2ODkxMDA0NX0.r95jrzNMRxuxf_JhOOIK8fYuwlp_Hh7GN7ItKKlAtrc'

export const supabase = createClient(supabaseUrl, supabaseKey)