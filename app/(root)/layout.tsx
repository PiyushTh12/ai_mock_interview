import { Link } from 'lucide-react'
import React, { ReactNode } from 'react'
import Image from 'next/image';
import { isAuthenticated } from '@/lib/action/auth.action';
import { redirect } from "next/navigation";


const RootLayout = async ({children}: {children : ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className="flex-item-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={38} height={32} />
        <h2 className='text-primary-100'>Prepwise</h2>

        </Link>
      </nav>
      {children}

    </div>
  )
}

export default RootLayout
