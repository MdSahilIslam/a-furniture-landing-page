const ToolTip = ({
  position,
  color = ["bg-red-700 border", "bg-green-700 border", "bg-blue-700 border"],
}) => {
  const toolTipPosition = {
    bottom: {
      tooltip:
        "absolute bottom-full left-1/2 space-x-2 transform -translate-x-1/2",
      arrow: "left-1/2 transform -translate-x-3/4",
    },
  };

  return (
    <>
      <div className="relative p-4 bg-white/25 rounded-full border border-1 text-xl">
        <div
          className={`hidden ${toolTipPosition[position].tooltip} mb-3 p-2 rounded-lg bg-white/25 shadow-md group-hover:flex`}
        >
          {color.map((item, i) => (
            <div
              key={i}
              className={`size-6 ${item} border border-white rounded-full`}
            />
          ))}

          <div
            className={`absolute ${toolTipPosition[position].arrow} w-0 h-0 -bottom-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35 `}
          />
        </div>
      </div>
    </>
  );
};

export default ToolTip;
