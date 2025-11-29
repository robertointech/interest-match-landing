import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function addToWaitlist(email: string, referredBy?: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email, referred_by: referredBy || null }])
    .select()
    .single()

  if (error) {
    if (error.code === '23505') {
      throw new Error('This email is already on the waitlist!')
    }
    throw error
  }

  return data
}

export async function getWaitlistPosition(email: string) {
  const { data, error } = await supabase
    .rpc('get_waitlist_position', { user_email: email })
  if (error) throw error
  return data
}

export async function getWaitlistCount() {
  const { data, error } = await supabase.rpc('get_waitlist_count')
  if (error) throw error
  return data
}
