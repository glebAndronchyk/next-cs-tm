"use client";

import { useForm } from "react-hook-form";

import { FunctionWithArgs } from "@/app/_shared/types/FunctionWithArgs.type";

import SearchIcon from "@/app/_shared/components/ui/icons/SearchIcon";

interface SearchInputProps {
  onSearch: FunctionWithArgs<Promise<void>>;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isDirty },
  } = useForm({ defaultValues: { searchString: "" } });

  const onSubmit = (data: { searchString: string }) => {
    reset();
    onSearch(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-between-centered w-[400px] p-2 pl-4 rounded-md bg-blue-400 text-gray-100">
        <input
          type="text"
          {...register("searchString")}
          className="bg-transparent w-11/12 text-lg focus:outline-0 placeholder:text-gray-100"
          placeholder="Find a player"
        />
        <button
          disabled={!isDirty}
          type="submit"
          className="w-max border-l-2 pl-2 border-gray-100"
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
