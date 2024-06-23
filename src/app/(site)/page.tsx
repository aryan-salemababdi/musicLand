import Header from "@/components/Atom/Header/Header";
import {ListItem} from "@/components/Atom/ListItem/ListItem";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div className={twMerge(`
      bg-neutral-900,
      rounded-lg
      w-full
      overflow-hiddren
      overflow-y-auto
    `)}>
      <Header>
        <div className="
          text-white
          text-3xl
          font-semibild
        ">
          <h1>
            Welcome Back!
          </h1>
          <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-3
          mt-4
          ">
            <ListItem 
            image="/images/liked.png"
            name="Liked Songs"
            href="liked"
            />
          </div>
          <div className="mt-2 mb-7 px-6">
            <div className="flex justify-between items-center">
                <h1 className="text-white text-2xl font-semibold">
                  Newest Songs
                </h1>
            </div>
          </div>
          List of Songs!
        </div>
      </Header>
    </div>
  );
}
