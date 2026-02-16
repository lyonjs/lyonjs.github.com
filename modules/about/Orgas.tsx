import React from 'react';
import { formerOrgas, orgas } from '../../data/orgas';
import { ListOfPeople } from '../person/ListOfPeople';

export const Orgas: React.FC = () => <ListOfPeople people={orgas} />;

export const FormerOrgas: React.FC = () => <ListOfPeople people={formerOrgas} />;
