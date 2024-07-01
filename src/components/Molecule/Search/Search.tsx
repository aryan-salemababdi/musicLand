import { NextPage } from "next";
import Header from "@/components/Atom/Header/Header";
import { SearchContent } from "@/app/search/components/SearchContent";
import { SearchInput } from "@/components/Atom/SearchInput/SearchInput";
import { Song } from '@/../../types';

interface SearchContentProps {
    songs: Song[];
  }

const Search:NextPage<SearchContentProps> = ({songs}) => {
    return (
        <div
            className="
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
      "
        >
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">Search</h1>
                    <SearchInput />
                </div>
            </Header>
            <SearchContent songs={songs} />
        </div>
    )
}

export default Search;