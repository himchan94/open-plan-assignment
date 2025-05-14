interface HeaderProps {
  title: string;
  titleColor?: string;
}

export default function Header({ title, titleColor }: HeaderProps) {
  return (
    <header className='flex justify-center items-center px-[20px] py-[17px] h-[52px]'>
      <span
        className={`text-medium text-[15px]`}
        style={{
          color: titleColor || "inherit",
        }}>
        {title}
      </span>
    </header>
  );
}
