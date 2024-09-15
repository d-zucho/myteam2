import Image from 'next/image'
import Logo from '/public/assets/logo.svg'
import Menu from '/public/assets/icon-hamburger.svg'
import { NAV_LINKS } from '@/constants/index'
import { link } from 'fs'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='bg-midnight-green'>
      <div className='container flex justify-between items-center'>
        <Image src={Logo} alt='logo' width={130} height={30} />
        <div>
          {/* MobileNav */}
          <div className='sm:hidden'>
            <MobileNav />
          </div>
          <div className='items-center gap-12 hidden sm:flex text-white font-medium'>
            {NAV_LINKS.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.label}
              </Link>
            ))}
            <div>
              <Link
                href='/contact'
                className={cn(buttonVariants({ variant: 'outline' }), 'bg-')}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
