import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/usernameSlice";
import { toggleLogin } from "../store/slices/isLoggedSlice";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Drawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.username.value);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const Logout = () => {
    dispatch(removeUser());
    dispatch(toggleLogin(0));
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="hidden md:block">
          <div className="flex items-center gap-2">
            <h1 className="text-black font-semibold text-lg text-center">
              <span className="block md:inline">Welcome</span> {username},
            </h1>
            <div onClick={Logout}>
              <img
                src="/images/Logout.svg"
                className="w-5 h-5 mt-1 cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <Bars3Icon
            className="lg:hidden cursor-pointer h-6 w-6"
            onClick={toggleMenu}
          />
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10 md:hidden"
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-0 overflow-hidden pt-32 ">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-in-out duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                            <button
                              className="rounded-md text-black1 hover:text-black1 focus:outline-none "
                              onClick={() => setOpen(false)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6 18 18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-white pt-6 shadow-xl">
                          <div className="px-4 sm:px-6">
                            <Dialog.Title className="text-lg font-medium text-gray-900 flex justify-center">
                              <div className="flex items-center gap-2">
                                <h1 className="text-black font-semibold text-lg text-center">
                                  <span className="block md:inline">
                                    Welcome
                                  </span>
                                  {username}
                                </h1>
                                <button
                                  onClick={Logout}
                                  className="bg-secondary font-semibold w-[60px] h-[40px] cursor-pointer flex items-center justify-center rounded-lg"
                                >
                                  <img
                                    src="/images/Logout.svg"
                                    className="w-5 h-5 mt-1 cursor-pointer"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </Dialog.Title>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </div>
    </>
  );
}
