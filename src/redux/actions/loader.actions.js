export const SHOW_LOADER = () => {
    return {
      type: "SHOW_LOADER",
    }
}

export const HIDE_LOADER = () => {
    return {
      type: "HIDE_LOADER",
    }
};

export const SET_LOADER = (value) => {
    return {
      type: "SHOW_LOADER",
      payload: {
          value: value,
      }
    }
}

export const INCREMENT_LOADER_VALUE = (value) => {
    return {
      type: "INCREMENT_LOADER_VALUE",
      payload: {
          value: value,
      }
    }
}
