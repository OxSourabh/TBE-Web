import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Image, Link } from '@/components';
import { useUser } from '@/hooks';
import { USER_NAVBAR_LINKS } from '@/constant';

const UserAvatar = () => {
  const { user, isAuth, loading } = useUser();

  if (loading || !isAuth) return null;

  return (
    <div>
      <Popover className='relative p-0 w-[40px] h-[40px] rounded-[50%] border-[2px]'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-white/90'}
                outline-none p-0 w-full`}
            >
              <Image
                src={user?.image || ''}
                alt={user?.name || ''}
                className='rounded-[50%] '
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel
                className={`absolute z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 `}
              >
                <div className='overflow-hidden rounded-2 bg-white text-sm shadow-lg ring-1 ring-gray-900/5 min-w-[200px]'>
                  {USER_NAVBAR_LINKS.map(({ title, onClick, link }, index) => {
                    return (
                      <Link
                        key={index}
                        href={link}
                        className='block px-4 py-2 hover:bg-gray-100'
                        onClick={onClick}
                      >
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default UserAvatar;
