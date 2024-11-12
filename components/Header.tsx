'use client';

import {
  SignedIn,
  SignedOut,
  useUser,
  UserButton,
  SignInButton,
} from '@clerk/nextjs';

const Header = () => {
  const { user } = useUser();

  return (
    <div className='flex justify-between items-center p-5'>
      {user && <h1 className='text-2xl'>{`${user?.firstName}'s Space`}</h1>}

      {/* Breadcrumbs */}

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
export default Header;
