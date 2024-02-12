const GroupButtons = ({ lables, selectedButton, setButton }) => {
  const widthPercentage = 100 / lables.length;
  return (
    <>
      {lables?.map((lable, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => setButton(index)}
            className={`${
              selectedButton === index
                ? "bg-black text-white"
                : "bg-white text-black"
            } py-3 px-4 w-[${widthPercentage}%]  first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border
     border-gray-200`}
          >
            {lable}
          </button>
        );
      })}
    </>
  );
};

export default GroupButtons;
