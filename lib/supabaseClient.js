import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = 'https://peisyeydodamejrdzobi.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlaXN5ZXlkb2RhbWVqcmR6b2JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMTQ0OTAsImV4cCI6MjA1Mjc5MDQ5MH0.orzkIJhZ_q3kxMFRmPqlG000pL6UekULKN0CJpLOBhg'

    export const supabase = createClient(supabaseUrl, supabaseKey)
