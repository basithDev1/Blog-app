import React from "react";
import { Link } from "react-router-dom";
import { TextInput, Label,Button } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="grid md:grid-cols-2 mx-auto max-w-3xl gap-2 p-3">
        <div className="sm:pb-15 pb-10 sm:place-content-center">
          {/* //left div */}
          <Link
            to="/"
            className="whitespace-nowrap text-sm sm:text-xl bold dark:white"
          >
            <span className=" font-bold px-2 py-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg text-white text-4xl">
              basith
            </span>
            <span className="text-2xl font-semibold">
              blog
            </span>
          </Link>
        </div>
        <div className="">
          <form action="" className="gap-4 ">
            <div className="mb-4">
              <Label value="Your name"> </Label>
              <TextInput
                id="username"
                placeholder="Enter Your Username"
              ></TextInput>
            </div>
            <div className="mb-4">
              <Label value="Your email"> </Label>
              <TextInput
                id="username"
                placeholder="Enter Your Email"
              ></TextInput>
            </div>
            <div className="mb-4">
              <Label value="Your password"> </Label>
              <TextInput
                id="username"
                placeholder="Enter Your Password"
              ></TextInput>
            </div>
          </form>
          {/* right div */}
          <Button className="w-full mt-8 ">Sign-up</Button>
        </div>
       
      </div>
    </div>
  );
}
