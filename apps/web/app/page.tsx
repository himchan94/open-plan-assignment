"use client";

import Button from "@repo/ui/button";
import { Header } from "@/features/components";
import { useRouter } from "next/navigation";
import { usePhotoStore } from "@/features/states/photo";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "@repo/hooks";

export default function Page() {
  const router = useRouter();
  const { setPhotoInfo } = usePhotoStore();
  const [loading, setLoading] = useState(false);

  const { refetch } = useQuery({
    queryKey: ["photoInfo"],
    queryFn: async () => {
      const response = await fetch("https://picsum.photos/id/0/info");
      return response.json();
    },
    enabled: false,
  });

  const fetchAndNavigate = async () => {
    // 연속 호출 디바운스와 더불어 방어코드 작성
    if (loading) return;

    setLoading(true);
    try {
      const { data } = await refetch();
      if (data) {
        setPhotoInfo(data);
        router.push("/result");
      }
    } catch (error) {
      console.error("에러발생", error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = useDebounce(fetchAndNavigate, 300, {
    leading: true,
  });

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
          <Button
            label='다음'
            onClick={handleButtonClick}
            isLoading={loading}
          />
        </div>
      </main>
    </>
  );
}
