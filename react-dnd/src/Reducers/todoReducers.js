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
      const { i, e, p, dragValue } = action.payload;
      e.dataTransfer.setData("p", p)
      if (dragValue === "drop") {
        state.startedTodo.splice(i, 1) 
      } else {
         state.completedTodo.splice(i, 1)
      }
      return {
        ...state
      }
    case "Droplist":
      const { ele, dropValue } = action.payload;
      const id = ele.dataTransfer.getData("p")
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