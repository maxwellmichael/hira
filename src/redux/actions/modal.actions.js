

export const SHOW_MODAL = (type, data) => {
    return {
      type: "SHOW_MODAL",
      payload:{
          type:type,
          data:data,
      }
    }
}

export const HIDE_MODAL = () => {
    return {
      type: "HIDE_MODAL",
    }
}