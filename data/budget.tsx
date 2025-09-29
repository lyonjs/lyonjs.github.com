export type BudgetRowType = {
  expense: string;
  description: string;
  cost: number;
};

export const budgetRows: BudgetRowType[] = [
  {
    expense: 'Abonnement plateforme Meetup',
    description: 'Plateforme pour publier nos événements, 90$ par semestre',
    cost: 160,
  },
  {
    expense: "Compte en banque d'association",
    description: 'Compte business associatif sur banque en ligne',
    cost: 120,
  },
  {
    expense: 'Nom de domaine et hébergement',
    description: "Actuellement acheté auprès d'OVH",
    cost: 15.59,
  },
  {
    expense: 'Hébergement du site',
    description: 'Offert par Clever Cloud',
    cost: 0,
  },
  {
    expense: 'T-shirts / Hoodies',
    description: "100 par personne, on prévoit jusqu'à 2 arrivée dans l'asso par ans",
    cost: 200,
  },
  {
    expense: 'Assurances',
    description: 'Couverture juridique et responsabilité morale',
    cost: 200,
  },
  {
    expense: 'Location de salle',
    description: 'Les salles et les lieux de nos événements sont offerts par nos sponsors',
    cost: 0,
  },
];
