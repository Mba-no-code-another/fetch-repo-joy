import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vqcifxnptcralkljztmm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxY2lmeG5wdGNyYWxrbGp6dG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzQwNDUsImV4cCI6MjA2ODkxMDA0NX0.r95jrzNMRxuxf_JhOOIK8fYuwlp_Hh7GN7ItKKlAtrc'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types
export interface User {
  id: string;
  email: string;
  role: 'customer' | 'partner' | 'admin' | 'super_admin';
  full_name?: string;
  phone?: string;
  created_at: string;
  partner_profile?: PartnerProfile;
}

export interface PartnerProfile {
  farm_name: string;
  contact_person: string;
  phone: string;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  description: string;
  product_types: string[];
  status: 'pending' | 'approved' | 'rejected';
  application_date: string;
  approved_by?: string;
  approval_date?: string;
  rejection_reason?: string;
}

export interface Order {
  id: string;
  user_id: string;
  order_date: string;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  total_amount: number;
  delivery_type: 'pickup' | 'delivery';
  delivery_address: {
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    pickup_location?: string;
  };
  payment_method: 'cod';
  items: OrderItem[];
  notes?: string;
  farmer_notifications?: FarmerNotification[];
}

export interface OrderItem {
  product_id?: string;
  name: string;
  quantity: number;
  price: number;
  farmer?: string;
  farmer_id?: string;
}

export interface FarmerNotification {
  farmer_id: string;
  notified: boolean;
  viewed: boolean;
}

export interface Product {
  id: string;
  name: string;
  farmer_id: string;
  farmer: string;
  price: number;
  location: string;
  rating: number;
  image: string;
  category: string;
  in_stock: boolean;
  harvest_date: string;
  description?: string;
}

export interface PlatformSettings {
  id: string;
  monthly_partner_fee: number;
  last_updated_by: string;
  last_updated_at: string;
}