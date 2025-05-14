"use client";

import { Header } from "@/features/components";
import { usePhotoStore } from "@/features/states/photo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@repo/ui/button";

export default function ResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { photoInfo } = usePhotoStore();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);

    if (!photoInfo && !isLoading) {
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  }, [photoInfo, router, isLoading]);

  if (isLoading && !photoInfo) {
    return <div>로딩 중...</div>;
  }

  if (!photoInfo) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div className='relative h-full bg-black px-[20px]'>
      <Image
        src={photoInfo.download_url}
        alt={`Background photo by ${photoInfo.author}`}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
        priority
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <Header title='김힘찬' titleColor='#ffffff' />
        <main className={"mt-[40px]"} style={{ height: "calc(100vh - 92px)" }}>
          <div className='flex items-center justify-center h-full gap-[80px] max-tab:gap-[40px] max-mobile:gap-[40px] max-tab:flex-col max-mobile:flex-col '>
            <section className='flex-1 justify-center flex w-full'>
              <div className='relative w-full aspect-[3/2] max-tab:aspect-[3/1.2] max-mobile:aspect-[3/1.2] rounded-[24px] overflow-hidden'>
                <Image
                  src={photoInfo.download_url}
                  alt={`Photo by ${photoInfo.author}`}
                  fill
                  style={{
                    objectFit: "fill",
                    objectPosition: "center",
                  }}
                />
              </div>
            </section>

            <section className='flex-1 w-full flex flex-col gap-[12px] justify-center'>
              <DetailWrapper>
                <div className='flex w-full gap-[16px] max-mobile:flex-col'>
                  <div className='flex-1'>
                    <Label>id</Label>
                    <Value>{photoInfo.id}</Value>
                  </div>
                  <div className='flex-1'>
                    <Label>author</Label>
                    <Value>{photoInfo.author}</Value>
                  </div>
                </div>
              </DetailWrapper>
              <DetailWrapper>
                <div className='flex w-full gap-[16px] max-mobile:flex-col'>
                  <div className='flex-1'>
                    <Label>width</Label>
                    <Value>{photoInfo.width}</Value>
                  </div>
                  <div className='flex-1'>
                    <Label>height</Label>
                    <Value>{photoInfo.height}</Value>
                  </div>
                </div>
              </DetailWrapper>
              <DetailWrapper>
                <div className='flex w-full gap-[16px] flex-col'>
                  <div className='w-full'>
                    <Label>url</Label>
                    <a
                      href={photoInfo.url}
                      target='_blank'
                      className='text-medium text-[15px] opacity-[0.5] break-all underline'
                      rel='noreferrer'>
                      {photoInfo.url}
                    </a>
                  </div>
                  <div className='w-full'>
                    <Label>download_url</Label>
                    <a
                      href={photoInfo.download_url}
                      target='_blank'
                      className='text-medium text-[15px] opacity-[0.5] break-all underline'
                      rel='noreferrer'>
                      {photoInfo.download_url}
                    </a>
                  </div>
                </div>
              </DetailWrapper>
              <div className='flex justify-center'>
                <Button
                  label={"이전"}
                  onClick={() => router.back()}
                  className={"!w-[154px]"}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

const DetailWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex p-[20px] rounded-[16px] bg-white'>{children}</div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => {
  return <h3 className='text-medium text-[15px]'>{children}</h3>;
};

const Value = ({ children }: { children: React.ReactNode }) => {
  return <p className='text-medium text-[15px] opacity-[0.5]'>{children}</p>;
};
