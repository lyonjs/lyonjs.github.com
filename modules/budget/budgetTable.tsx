import styles from './budgetTable.module.css';
import { budgetRows } from '../../data/budget';

const costFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

export const BudgetTable = () => {
  return (
    <table className={styles.budgetTable}>
      <thead>
        <tr>
          <th>
            <strong>Dépense</strong>
          </th>
          <th>
            <strong>Description</strong>
          </th>
          <th>
            <strong>Coût</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {budgetRows.map((row) => {
          return (
            <tr key={row.expense}>
              <td>
                <strong>{row.expense}</strong>
              </td>
              <td>{row.description}</td>
              <td>{costFormat.format(row.cost)}</td>
            </tr>
          );
        })}
        <tr>
          <td>
            <strong>Total</strong>
          </td>
          <td></td>
          <td>
            {costFormat.format(
              budgetRows.reduce((total, currentValue) => {
                return total + currentValue.cost;
              }, 0),
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
