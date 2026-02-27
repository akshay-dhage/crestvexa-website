/// <reference types="vite/client" />
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl ? "Set" : "NOT SET");
console.log("Supabase Key:", supabaseAnonKey ? "Set (length: " + supabaseAnonKey.length + ")" : "NOT SET");

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase ENV variables missing - Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env file");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Custom error class for better error handling
export class FormSubmissionError extends Error {
  constructor(
    message: string,
    public code?: string,
    public details?: string,
    public hint?: string,
    public isNetworkError?: boolean
  ) {
    super(message);
    this.name = 'FormSubmissionError';
  }
}

// Check if user is online
export function isOnline(): boolean {
  if (typeof navigator !== 'undefined') {
    return navigator.onLine;
  }
  return true;
}

// Check if error is a network error
export function isNetworkError(error: unknown): boolean {
  if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
    return true;
  }
  if (error instanceof TypeError && error.message.includes('NetworkError')) {
    return true;
  }
  if (error instanceof Error && error.message.includes('network')) {
    return true;
  }
  return false;
}

// Get more details about network errors
export function getNetworkErrorDetails(): string {
  const issues: string[] = [];
  
  if (!isOnline()) {
    issues.push('You appear to be offline');
  }
  
  issues.push('Could not connect to the server');
  issues.push('This could be due to:');
  issues.push('  - Network connectivity issues');
  issues.push('  - Firewall or VPN blocking the connection');
  issues.push('  - Supabase project paused or unavailable');
  issues.push('  - Incorrect Supabase URL');
  
  return issues.join('\n');
}

export async function submitContactForm(data: any) {
  const { data: result, error } = await supabase
    .from("contact_submissions")
    .insert([data]);

  console.log("Insert result:", result, error);

  if (error) throw error;

  return result;
}

export async function submitCareerApplication(data: any) {
  const { data: result, error } = await supabase
    .from("career_applications")
    .insert([data]);

  console.log("Career application result:", result, error);

  if (error) throw error;

  return result;
}
