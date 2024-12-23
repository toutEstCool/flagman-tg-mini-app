
import { BottomNavbarItemProps } from './BottomNavbarProps';
import Link from 'next/link';


export const BottomNavbarItem = (props: BottomNavbarItemProps) => {
  const { isActive, label, Icon, to } = props
  return (
    <li >
      <Link
        href={to}
        // className={`${s.nav__link} ${isActive ? s.nav__link_active : ''}`}
        aria-label={`Перейти в ${label}`}
      >
        {/* <Icon isActive={isActive} /> */}
        <span >{label}</span>
      </Link>
    </li>
  );
};