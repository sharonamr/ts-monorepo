import { FC } from 'react';
import { getUser } from '@ts-monorepo/data/UserService';

export const Header: FC = () => {

  return <div>Hello {getUser().name}</div>;
}
