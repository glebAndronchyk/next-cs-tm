"use client";

import { useForm } from "react-hook-form";
import { FunctionWithArgs } from "@/app/(shared)/_types/FunctionWithArgs.type";

interface SearchInputProps {
  onSearch: FunctionWithArgs<Promise<void>>;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const {
    handleSubmit,
    register,
    formState: { isDirty },
  } = useForm({ defaultValues: { searchString: "" } });

  return (
    <form onSubmit={handleSubmit(onSearch)}>
      <input type="text" {...register("searchString")} />
      <button disabled={!isDirty} type="submit">
        search
      </button>
    </form>
  );
};

export default SearchInput;
