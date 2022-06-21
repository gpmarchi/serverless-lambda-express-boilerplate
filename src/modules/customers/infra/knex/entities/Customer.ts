import { Exclude } from 'class-transformer';

class Customer {
  readonly id: string;

  first_name: string;

  last_name: string;

  username: string;

  email: string;

  @Exclude()
  password: string;

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;
}

export { Customer };
