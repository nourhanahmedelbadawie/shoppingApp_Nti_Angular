export interface User {
  name: string;
  birtrhDate?: string;
  password: string;
  email: string;
  isAdmin: boolean;
  phone ?:string
  addresses ? :string[]
}
