import { FC } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Header } from '@ts-monorepo/components';

export const Root: FC = () => (<Router><div>ts-monorepo<Header /></div></Router>)