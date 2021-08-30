import { useCallback, useContext, useEffect, useReducer, useRef } from "react";
import { Grid, Search } from "semantic-ui-react";
import BeerContext from "../../contexts/Beer/BeerContext";

enum ActionsEnum {
  CleanQuery = "CLEAN_QUERY",
  StartSearch = "START_SEARCH",
  FinishSearch = "FINISH_SEARCH",
  UpdateSelection = "UPDATE_SELECTION",
}

type ReducerState = {
  loading: boolean;
  results: any;
  value: string;
};

type ReduceAction = {
  type: ActionsEnum,
  query: string,
  selection: string,
  results: any
}

const initialState: ReducerState = {
  loading: false,
  results: [],
  value: "",
}

function searchReducer(state: ReducerState, action: ReduceAction): ReducerState {
  switch (action.type) {
    case ActionsEnum.CleanQuery:
      return initialState;
    case ActionsEnum.StartSearch:
      return { ...state, loading: true, value: action.query };
    case ActionsEnum.FinishSearch:
      return { ...state, loading: false, results: action.results };
    case ActionsEnum.UpdateSelection:
      return { ...state, value: action.selection };
    default:
      throw new Error();
  }
}

function BeerSearch() {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const { loading, results, value } = state;
  let timeoutRef = useRef<NodeJS.Timeout>(); //maybe could be better useRef<ReturnType<typeof setTimeout>>();  

  const { getBeersByName } = useContext(BeerContext);

  const handleSearchChange = useCallback((e, data) => {

    clearTimeout(timeoutRef.current as NodeJS.Timeout);
    dispatch({ type: ActionsEnum.StartSearch, query: data.value, results: [], selection: "" })

    timeoutRef.current = setTimeout(async () => {
      if (data.value.length === 0) {
        dispatch({ type: ActionsEnum.CleanQuery, query: "", results: [], selection: "" })
        return;
      }

      // getBeersByName(data?.value); // call dispatch and update beer collection state
      getBeersByName("Buzz"); // call dispatch and update beer collection state

      dispatch({ type: ActionsEnum.FinishSearch, query: "", results: [], selection: "" });
    }, 300); // yes, my time-out for response

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current as NodeJS.Timeout);
    };
  }, []);

  return (
    <>
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={loading}
            open={false}
            onResultSelect={(e, data) => {
              dispatch({ type: ActionsEnum.UpdateSelection, query: "", results: [{ }], selection: data.result.title })
            }}
            onSearchChange={handleSearchChange}
            results={results}
            value={value}
          />
        </Grid.Column>
      </Grid>
    </>
  );
}

export default BeerSearch;
