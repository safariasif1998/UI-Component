import { BadgeCheck } from "../../../icons/BadgeCheck";
import { PlusIcon } from "../../../icons/PlusIcon";
import { Item, type ItemProps } from "./Item";

export interface Stats {
  following: number;
  follower: number;
  posts: number;
}
export type ProfileCardProps = {
  info: {
    name: string;
    lastName: string;
    age: number;
    desc: string;
    mapped: Stats[];
    img: any;
  };
  follow?: boolean;
  follower: number;
  onFollow: () => void;
};

export function ProfileCard(props: ProfileCardProps) {
  const { info, follower, follow, onFollow } = props;

  return (
    <div className="border max-w-80 rounded-2xl border-gray-300 px-2">
      <div className="rounded-b-3xl shadow-2xl m-3 max-h-80 overflow-hidden">
        <img
          className="rounded-3xl overflow-hidden"
          src={info.img}
          alt={info.name}
        />
      </div>
      <div className="my-4 font-bold text-2xl m-3 flex items-center">
        <span>{info.name}</span>
        <span className="ml-1">{info.lastName}</span>
        <BadgeCheck className="fill-green-600 ml-1 text-white" />
      </div>
      <div className="m-3">
        <p className="text-gray-700 font-light">{info.desc}</p>
      </div>
      {info.mapped.map((item: ItemProps, index) => {
        return (
          <Item
            key={index}
            follower={follower}
            following={item.following as number}
            posts={item.posts as number}
          />
        );
      })}
      <div className="mx-3 mb-4">
        {follow ? (
          <div className="w-full bg-gray-200 px-2 py-1 justify-center flex gap-x-2 rounded-2xl">
            <p
              onClick={onFollow}
              className="px-2 py-1 select-none text-blue-500 cursor-pointer hover:transition"
            >
              Followed
            </p>
          </div>
        ) : (
          <div
            onClick={onFollow}
            className="flex px-2 py-1 bg-blue-500 justify-center gap-x-2 text-white rounded-2xl hover:bg-blue-600/90 cursor-pointer hover:transition"
          >
            <button className="select-none">Follow</button>
            <PlusIcon />
          </div>
        )}
      </div>
    </div>
  );
}
