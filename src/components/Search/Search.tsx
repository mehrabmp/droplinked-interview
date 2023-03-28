import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (value: string) => void;
}

export const Search = ({ onSearch }: Props) => {
  return (
    <form
      className="relative flex items-center justify-between rounded-full dark:bg-neutral-800"
      onSubmit={e => e.preventDefault()}
    >
      <input
        className="h-full w-full rounded-full border-transparent bg-transparent px-4 pr-10 outline-none transition-colors focus:border-primary focus:ring-0"
        type="text"
        name="search"
        id="search"
        placeholder="search"
        onChange={e => onSearch(e.target.value)}
      />
      <BsSearch className="absolute right-4 h-full cursor-pointer text-neutral-500" />
    </form>
  );
};
