const initialData = { startedTodo: [], completedTodo: [] }
const todoReducers = (state = initialData, action) => {
  switch (action.type) {
      case "AddTodo":
      const { data } = action.payload;
      if(data !== ''){
        return {
          ...state,
          startedTodo: [...state.startedTodo, data],
        }
      } else {
        alert(`please add todo!...`)
      }
    

    case "Draglist":
      const { index, dragElement, dataTransfer, dragValue } = action.payload;
      dragElement.dataTransfer.setData("dataTransfer", dataTransfer)
      if (dragValue === "drop") {
        state.startedTodo.splice(index, 1) 
      } else {
         state.completedTodo.splice(index, 1)
      }
      return {
        ...state
      }
    case "Droplist":
      const { dropElement, dropValue } = action.payload;
      const id = dropElement.dataTransfer.getData("dataTransfer")
      if (dropValue === "drag")
        return {
          ...state,
          completedTodo: [
            ...state.completedTodo, id
          ]
        }
      else return {
        ...state,
        startedTodo: [
          ...state.startedTodo, id
        ]
      }

    default:
      return state;
  }

}

export default todoReducers;