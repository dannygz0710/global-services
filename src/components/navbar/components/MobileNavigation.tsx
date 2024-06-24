import { ActiveLink } from "./ActiveLink";

interface Props {
  isOpen: boolean;
  navItems: { path: string; label: string }[];
}

export const MobileNavigation = ({ isOpen, navItems }: Props) => {
  return (
    <div>
      {isOpen && (
        <div className=" md:hidden" id="mobile-nav">
          <ul className="flex flex-col  my-8  text-jordy-blue-600  uppercase tracking-widest divide-y divide-jordy-blue-600 pt-6 gap-3">
            {navItems.map(({ path, label }) => (
              <ActiveLink key={path} path={path} text={label} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
