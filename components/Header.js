import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {
    HomeIcon,
    CollectionIcon,
    BadgeCheckIcon,
    LightningBoltIcon,
    UserIcon,
    SearchIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
            <HeaderItem title='SEARCH' Icon={SearchIcon} />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <Image src="/hulu-white.png" height={100} width={200} className="object-contain" />
    </header>
  )
}

export default Header;
