"use client";

import Button from "@repo/ui/button";
import { Header } from "@/features/components";

export default function Page() {
  return (
    <>
      <Header title='김힘찬' />
      <main className='flex flex-col' style={{ height: "calc(100vh - 52px)" }}>
        <div className='flex-1 flex justify-center items-center'>
          <h2 className='text-semi-bold text-[32px] text-center'>
            안녕하세요
            <br />
            김힘찬입니다.
          </h2>
        </div>
        <div className='flex justify-center items-center px-[20px] py-[40px]'>
          <Button label='다음' onClick={() => {}} />
        </div>
      </main>
    </>
  );
}
