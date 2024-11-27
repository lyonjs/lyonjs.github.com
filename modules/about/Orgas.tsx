import React from 'react';
import { orgas } from '../../data/orgas';
import { ListOfPeople } from '../person/ListOfPeople';

export const Orgas: React.FC = () => <ListOfPeople people={orgas} />;
