export default function EditPage({
  isEditable,
  setIsEditable,
  inputValue,
  setInputValue,
}) {
  return (
    <>
      {isEditable && (
        <div className="bg-gray-600 w-[20%] text-white m-auto text-center py-7 rounded-xl absolute top-[250px] right-0 left-0">
          <h1 className="text-2xl font-bold">Delete Todo</h1>
          <p className="font-semibold">Are you sure you want to delete it ?</p>

          <input vlaue={inputValue} />
        </div>
      )}
    </>
  );
}
