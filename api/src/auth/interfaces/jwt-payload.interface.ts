export interface JwtPayload {
  first_name: string;
  last_name: string;
  email: string;
  location?: string;
  password?: string;
  user_role_id?: string;
  user_role?: object;
}
