import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import Image from 'next/image'
import Logo from '/public/assets/logo.svg'
import Menu from '/public/assets/icon-hamburger.svg'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src={Menu} alt='menu' width={24} height={24} className='' />
      </SheetTrigger>
      <SheetContent className='bg-police-blue border-none text-white focus:outline-none active:outline-none max-w-[300px] font-inter'>
        <SheetHeader>
          <Image
            src={Logo}
            alt='logo'
            width={130}
            height={30}
            className='mx-auto'
          />

          <VisuallyHidden.Root>
            <SheetTitle className=''>myteam</SheetTitle>
            <SheetDescription>Menu</SheetDescription>
          </VisuallyHidden.Root>
        </SheetHeader>
        <div
          className='flex flex-col gap-6 text-white font-medium mt-12
        '
        >
          {NAV_LINKS.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link key={index} href={link.href}>
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <div className='mt-9 mx-auto'>
            <SheetClose asChild>
              <Link
                href='/contact'
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'bg-none rounded-full'
                )}
              >
                Contact Us
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
