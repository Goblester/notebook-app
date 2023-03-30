export type UserType = {
  name: string;
  email: string;
  phone: string;
}

export type Maybe<T> = T | null

export type UserFieldsType = keyof UserType;