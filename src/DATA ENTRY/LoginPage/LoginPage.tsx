import type { FormEvent } from "react";
import { AppleIcon } from "../../icons/AppleIcon";
import { GoogleIcon } from "../../icons/GoogleIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import UserName from "../Inputs/UserName";

export type LoginPageProps = {};

export function LoginPage(props: LoginPageProps) {
  const {} = props;
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  function handleClick() {}
  return (
    <div className="px-12 py-9 m-5 border bg-[#111827FF] w-96 rounded-2xl text-[#F3F4F6FF]">
      <div>
        <h2 className="text-center font-extrabold text-3xl">Sign In</h2>
      </div>
      <form action="" className="mt-5" onSubmit={handleSubmit}>
        <UserName
          value=""
          type="text"
          label="Username"
          style={"bg-[111827FF] w-full"}
        />
        <UserName
          value=""
          type="password"
          label="Password"
          style={"bg-[111827FF] w-full"}
        />
        <span className="text-sm my-2 block text-end">
          <a href="#" className="hover:text-[#F3F4F6D2]">
            Forgot Password ?
          </a>
        </span>
        <input
          className="block w-full font-bold text-[#111827FF] bg-[#A78BFAFF] p-2.5 rounded-2xl border-0 my-5 mx-auto cursor-pointer"
          value="Sign in"
          name="submit"
          type="submit"
          onSubmit={handleClick}
        />
      </form>
      <span className="block text-center my-3">or Sign in with</span>
      <div className="flex justify-around my-5">
        <GoogleIcon />
        <AppleIcon />
        <TwitterIcon />
      </div>
      <span className="agreement block text-center mt-3 mb-0">
        <a href="#">Learn user licence agreement</a>
      </span>
    </div>
  );
}
