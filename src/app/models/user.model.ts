export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'customer' | 'admin' | null;
}

export interface CreateUserDto extends Omit<User, 'id'> {}

export const EmptyUser: User = {
  email: '',
  name: '',
  id: '',
  password: '',
  role: null,
};
