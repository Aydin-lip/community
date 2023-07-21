import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const Items = ["My Profile", "Settings", "Log Out"]

interface IProps {
  children: JSX.Element
}
const DropDown = ({ children }: IProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="hover:text-indigo-600 text-dark-them hover:bg-dark-them-active transition-all inline-flex w-full justify-center items-center rounded-md text-sm font-semibold shadow-">
          {children}
          {/* <ChevronDownIcon className={`ml-2 h-5 w-5 mr-2 transition-all`} /> */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="min-w-[7rem] absolute translate-x-1/4 right-1/2 z-10 mt-2 origin-top-right rounded-md bg-dark-them shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 border border-neutral-700 bg-neutral-800 rounded-md">
            {Items.map((item, idx) =>
              <Menu.Item key={idx}>
                {({ active }) => (
                  <span
                    className={`block px-4 py-2 text-sm cursor-pointer ${active ? 'bg-neutral-900' : ''}`}
                  >
                    {item}
                  </span>
                )}
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export default DropDown