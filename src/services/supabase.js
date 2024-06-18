import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gwgxtgxcpxftffdvcmas.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3Z3h0Z3hjcHhmdGZmZHZjbWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MjQ5NTgsImV4cCI6MjAyNzEwMDk1OH0.qrb3qjFeNdtYn3GSL546sunqhbjCNO175qZfESb30-I";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
