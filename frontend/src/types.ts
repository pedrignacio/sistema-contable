export interface Company {
  id: string;
  name: string;
  rut: string;
}

export interface UserProfile {
  email: string;
  role: 'CONTADOR' | 'ADMIN' | 'CLIENTE';
  firstName?: string;
  lastName?: string;
}
