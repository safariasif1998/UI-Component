import { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import ProfileImageUrl from "../../../images/img.jpg";
import type { StoryFn, Meta } from "@storybook/react";

const meta = {
  component: ProfileCard,
  title: "DATA DISPLAY / CARDS / Profile Card",
  argTypes: {
    onFollow: { action: "handleFollow clicked" },
  },
} as Meta<typeof ProfileCard>;

export default meta;

const Template: StoryFn<typeof ProfileCard> = (args) => {
  const [follow, setFollow] = useState(false);
  const [incrementFollower, setIncrementFollower] = useState(
    args.info.mapped[0].follower,
  );
  const handleFollowed = () => {
    args.onFollow?.()
    setFollow((follow) => !follow);
    setIncrementFollower((prev) => prev + (follow ? -1 : +1));
  };
  return (
    <div
      className={"w-full h-full flex items-center justify-center min-h-[300px]"}
    >
      <ProfileCard
        {...args}
        follower={incrementFollower}
        follow={follow}
        onFollow={handleFollowed}
      />
    </div>
  );
};

export const ProfileCardStory = Template.bind({});

ProfileCardStory.storyName = "Profile Card";
ProfileCardStory.args = {
  info: {
    name: "Elina",
    lastName: "Mehran",
    age: 23,
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    mapped: [{ following: 234, follower: 212, posts: 2 }] as const,
    img: ProfileImageUrl,
  },
};
