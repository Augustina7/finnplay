import { useDispatch, useSelector } from "react-redux";
import { IProvider } from "../../lib/types/types";
import { selectFilter, setFilter } from "../../store/gameReducer";
import OptionsContainer from "./OptionsContainer";
import "./styles/Filtration.css";

const Providers = (props: { options: IProvider[] }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleSetProviders = (providerId: number) => {
    const updatedProviders = filter.providers.includes(providerId)
      ? filter.providers.filter((id) => id !== providerId)
      : [...filter.providers, providerId];

    dispatch(setFilter({ ...filter, providers: updatedProviders }));
  };

  return (
    <OptionsContainer
      title="Providers"
      options={props.options}
      onClick={handleSetProviders}
      selectedOptions={filter.providers}
    />
  );
};

export default Providers;
