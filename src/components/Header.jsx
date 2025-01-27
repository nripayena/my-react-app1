'use client'

import { useState } from 'react'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'

import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const aesthetics = [
  { name: 'Y2k',  href: '/y2k'},
  { name: 'Old Money', href: '/oldmoney'},
  { name: 'Dark Feminine',  href: '/darkfem'},
  { name: 'Coquette Core',  href: '/cottagecore' },
  
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header>
      <nav aria-label="Global" className=" font-custom-h mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* ✅ Mobile Menu Button (Shows on Small Screens) */}
        <button
          className="lg:hidden block p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-8 w-8" />
        </button>
       
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 p-2">
              Aesthetics
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {aesthetics.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div> */}
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
             
            </PopoverPanel>
          </Popover>

        </PopoverGroup>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end transform transition-all duration-300 hover:scale-110 hover:text-black max-w-full font-bold break-words text-center">
          <h1>The Fashion Fairy</h1>
    
        </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/" className="text-sm/6 font-semibold text-gray-900">
            Home <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className=" fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm" />

        <DialogPanel className="font-custom-h fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg">
          <div className="flex items-center justify-between p-6">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-900">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            <a href="/" className="block py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100">
              Home
            </a>
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-900">Aesthetics</p>
              <div className="mt-2 space-y-2">
                {aesthetics.map((item) => (
                  <a key={item.name} href={item.href} className="block py-2 pl-4 text-sm text-gray-800 hover:bg-gray-100">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
