import { House } from 'lucide-react';
import { BottomNavbarItem } from './BottomNavbarItem';

export const BottomNavbar = () => {
  return (
    <header>
      <nav>
        <div>
          <ul>
            <BottomNavbarItem
              to="/profile"
              label="Профиль"
              Icon={({ isActive }) => <House color={isActive ? 'blue' : 'gray'} />}
            // isActive={isActive('/profile')}
            />
            <BottomNavbarItem
              to="/academy"
              label="Академия"
              Icon={({ isActive }) => <House color={isActive ? 'blue' : 'gray'} />}
            // isActive={isActive('/academy')}
            />
            <BottomNavbarItem
              to="/earn"
              label="Earn"
              Icon={({ isActive }) => <House color={isActive ? 'blue' : 'gray'} />}
            // isActive={isActive('/earn')}
            />
            <BottomNavbarItem
              to="/menu"
              label="Меню"
              Icon={({ isActive }) => <House color={isActive ? 'blue' : 'gray'} />}
            // isActive={isActive('/menu')}
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};
