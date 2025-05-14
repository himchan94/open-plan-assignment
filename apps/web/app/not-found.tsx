"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <h2 className='text-2xl mb-6'>페이지를 찾을 수 없습니다</h2>

      <Link
        href='/'
        className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors'>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
