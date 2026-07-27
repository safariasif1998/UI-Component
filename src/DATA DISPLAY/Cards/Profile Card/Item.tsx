
export type ItemProps = {
  follower: number;
  following: number;
  posts: number;
};

export function Item(props: ItemProps) {
  const { follower, following, posts } = props;

  return (
    <div className="flex justify-around my-4 w-full">
      <div className="text-start">
        <p className="ml-1">{posts}</p>
        <span>Posts</span>
      </div>
      <div className="text-start">
        <p className="ml-1">{following}</p>
        <span>Following </span>
      </div>
      <div className="text-start">
        <p className="ml-1">{follower}</p>
        <span>Follower</span>
      </div>
    </div>
  );
}
