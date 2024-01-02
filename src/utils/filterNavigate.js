import { filterApi } from "../components/Boxes/filterBox/FilterApi";
import { searchUpdate } from "../redux/slices/movieSlice";

const NavigateFn = (updatedId,navigate) => {
  if (window.location.pathname === "/explore/tv") {
    navigate("explore/tv", {
      state: { dataType: "filtershowsByType", filter: updatedId?.tvId || "" },
    });
  } else {
    navigate("explore/movie", {
      state: { dataType: "explore", filter: updatedId?.movieId || "" },
    });
  }
};
export const filter = (data, callbackFnObject) => {
  const { filterID, idItem,active } = data;
  const {setFilterID,dispatch,navigate,setActive} = callbackFnObject
  console.log(idItem);
  const updatedId =
    filterID?.id === idItem
      ? {}
      : filterApi.type.find(({ id }) => id === idItem);
  setFilterID((prev) =>
    prev?.id === idItem
      ? {}
      : filterApi.type.find(({ id }) => idItem === id)
  );
  dispatch(searchUpdate(""));
  NavigateFn(updatedId,navigate);
  console.log(updatedId);
  setActive(!active);
};
