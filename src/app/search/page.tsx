import { getSongsByTitle } from '@/actions/getSongsByTitle';
import Search from '@/components/Molecule/Search/Search';


interface SearchProps {
  searchParams: {
    title: string;
  };
}

const SearchPage = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);
  return <Search songs={songs}/>
}

export default SearchPage;