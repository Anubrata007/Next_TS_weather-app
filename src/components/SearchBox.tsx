/** @format */

import React from 'react';
import { cn } from '@/utils/cn';
import { TfiSearch } from "react-icons/tfi";

type Props = {
    className?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

export default function SearchBox(props: Props) {
  return (
    <form onSubmit={props.onSubmit} className={cn("flex relative items-center justify-center h-10", props.className)}>

        <input type='text' value={props.value} onChange={props.onChange} placeholder='Search location..' className='placeholder:text-sm px-4 py-2 w-[230px] border-b-2 border-slate-400 outline-none h-full' />

        <button className='px-4 py-[9px] h-full'>
            <TfiSearch />
        </button>
    </form>
  )
}