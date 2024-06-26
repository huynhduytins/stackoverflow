'use client'

import Image from 'next/image'
import React from 'react'

import { Input } from '@/components/ui/input'

interface LocalSearchProps {
  route: string
  iconPosition: string
  imgSrc: string
  placeholder: string
  otherClass?: string
}

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClass,
}: LocalSearchProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] w-full grow items-center gap-4 rounded-[10px] px-4 ${otherClass}`}
    >
      {iconPosition === 'left' && (
        <Image
          src={imgSrc}
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value="" 
        onChange={() => {
          console.log('searching...')
        }}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {iconPosition === 'right' && (
        <Image
          src={imgSrc}
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  )
}

export default LocalSearch
