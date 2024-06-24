import { ActiveLink } from "..";

interface Props {
  navItems: { path: string; label: string }[];
}

export const NavItem = ({ navItems }: Props) => {
  return (
    <div className="hidden md:block">
      <ul className="flex space-x-4">
        {navItems.map(({ path, label }) => (
          <ActiveLink key={path} path={path} text={label} />
        ))}
      </ul>
    </div>
  );
};
