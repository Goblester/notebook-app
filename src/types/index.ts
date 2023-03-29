export type UserType = {
  name: string;
  email: string;
  phone: string;
}

export type UserFieldsType = keyof UserType;