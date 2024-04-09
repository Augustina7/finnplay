import { useDispatch, useSelector } from "react-redux";
import { IGroup } from "../../lib/types/types";
import { selectFilter, setFilter } from "../../store/gameReducer";
import OptionsContainer from "./OptionsContainer";
import "./styles/Filtration.css";

const Groups = (props: { options: IGroup[] }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleSetGroups = (groupId: number) => {
    const updatedGroups = filter.groups.includes(groupId)
      ? filter.groups.filter((id) => id !== groupId)
      : [...filter.groups, groupId];

    dispatch(setFilter({ ...filter, groups: updatedGroups }));
  };

  return (
    <OptionsContainer
      title="Groups"
      options={props.options}
      onClick={handleSetGroups}
      selectedOptions={filter.groups}
    />
  );
};

export default Groups;
