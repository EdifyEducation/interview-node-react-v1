import { Dispatch } from 'redux';

export interface IBooks {
  id: number;
  title: string;
  description: string;
  image: string;
  barcode: string;
  value: number;
  createdAt: string;
  updatedAt: string;
}

// DTO: Data Transfer Object
export interface IBooksStateDTO {
  data: Array<IBooks>;
}

interface IAction {
  type: string;
  payload: Array<IBooks>;
}

// INITIAL STATE
export const InitialState: IBooksStateDTO = {
  data: [],
};

// ACTION TYPES
export const Types = {
  LIST_BOOKS: 'LIST_BOOKS',
};

// REDUCER
export function Reducer(state = InitialState, action: IAction) {
  switch (action.type) {
    case Types.LIST_BOOKS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

// ACTIONS
export const listBooks = (value: any) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: Types.LIST_BOOKS, payload: value });
  };
};
