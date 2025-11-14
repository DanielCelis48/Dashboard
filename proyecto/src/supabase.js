// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://dupcftaimosbetgmiodt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1cGNmdGFpbW9zYmV0Z21pb2R0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzA4MjMxMSwiZXhwIjoyMDc4NjU4MzExfQ.w6z2hBVhoRUboPJTqxwzlgGZF2ic_yYkdCEAqx3w4LA';
export const supabase = createClient(supabaseUrl, supabaseKey);