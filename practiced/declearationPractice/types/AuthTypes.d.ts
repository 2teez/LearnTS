declare module "AuthTypes" {
  export interface User {
    email: string;
    roles: string[];
    source?: string;
  }
}
