function DarkMode({ icon }) {
  return (
    <div className="rounded-full border-[1.5px] border-black dark:border-white">
      <div className="rounded-full  p-1 text-xl md:text-[20px] bg-black text-white cursor-pointer border-[1.5px] border-white dark:bg-white dark:text-black dark:border-black">
        {icon}
      </div>
    </div>
  );
}

export default DarkMode;
