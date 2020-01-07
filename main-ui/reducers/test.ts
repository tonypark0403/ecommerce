import produce from "immer"
import { Reducer } from "redux";
import { createAction, handleActions } from "redux-actions";

export interface TestProps {
  loading: boolean
  data: any
}

const initialState: TestProps = {
  loading: false,
  data: "empty"
};

const testAwait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!")
    }, 4000)
  })
}

export const testAction: any = createAction("TEST", async () => {
  try {
    const data = await testAwait()
    return data;
  } catch (error) {
    throw error
  }
})

export const getTodoAction: any = createAction("TODO", async () => {
  try {
    const response = await (await fetch("https://jsonplaceholder.typicode.com/todos/1"))
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
})


const reducer: Reducer<TestProps> = handleActions({
  [testAction]: {
    PENDING: (state) => produce(state, draft => {
      draft.loading = true;
      draft.data = "Start!!"
    }),
    FULFILLED: (state, { payload }) => produce(state, draft => {
      draft.loading = false;
      draft.data = payload;
    }),
    REJECTED: (state) => produce(state, draft => {
      draft.loading = false;
      draft.data = "Failed";
    })
  },
  [getTodoAction]: {
    PENDING: (state) => produce(state, draft => {
      draft.loading = true;
      draft.data = "Start!!"
    }),
    FULFILLED: (state, { payload }) => produce(state, draft => {
      draft.loading = false;
      draft.data = payload;
    }),
    REJECTED: (state) => produce(state, draft => {
      draft.loading = false;
      draft.data = "Failed";
    })
  }
}, initialState)

export default reducer;