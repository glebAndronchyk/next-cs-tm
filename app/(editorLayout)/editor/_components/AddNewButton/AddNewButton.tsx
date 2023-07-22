import { useAppDispatch } from "@/app/_shared/hooks/useAppDispatch";
import { addNewPlayer } from "@/app/_shared/redux/slices/editor";
import { EGameSides } from "@/app/_shared/enums/gameEnums";

interface AddNewButtonProps {
  addTo: EGameSides;
  disabled: boolean;
}

const AddNewButton = ({ addTo, disabled }: AddNewButtonProps) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(addNewPlayer(addTo));
  };

  return (
    <button disabled={disabled} onClick={onClick} type="button">
      Add New
    </button>
  );
};

export default AddNewButton;
