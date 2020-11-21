export interface JwtPayload {
  first_name: string;
  last_name: string;
  email: string;
  location?: string;
  user_role_id: string;
  user_role_label: string;
  user_role_is_deleted: boolean;
}
