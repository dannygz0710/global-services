

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export const TogleButton = ({ setIsOpen, isOpen }: Props) => {
  return (
    <div className="md:hidden ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="text-jordy-blue-400 hover:text-jordy-blue-600 focus:outline-none "
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.707 6.293l-1.414 1.414L10.586 12 5.293 17.293l1.414 1.414L12 13.414l5.293 5.293 1.414-1.414L13.414 12l5.293-5.293-1.414-1.414L12 10.586 6.707 5.293z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z"
            />
          )}
        </svg>
      </button>
    </div>
  );
};
