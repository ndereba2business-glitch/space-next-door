// components/ui/MenuList.tsx
//
// Editorial price list: serif dish name, dotted leader, price, one-line
// description. Shared by the homepage showcase and the full /menu page.

import { MENU_CURRENCY, type MenuItem } from '@/data/menu'
import styles from './MenuList.module.css'

export default function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.name} className={styles.item}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.leader} aria-hidden="true" />
          <span className={styles.price}>
            {item.price != null ? (
              <>
                <span className={styles.currency}>{MENU_CURRENCY}</span>{' '}
                {item.price.toLocaleString('en-KE')}
              </>
            ) : (
              'On request'
            )}
          </span>
          {item.description && <span className={styles.desc}>{item.description}</span>}
        </li>
      ))}
    </ul>
  )
}
