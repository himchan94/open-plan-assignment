export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col' style={{ height: "calc(100vh - 52px)" }}>
      <div className='flex-1 flex justify-center items-center'>{children}</div>
    </main>
  );
}
