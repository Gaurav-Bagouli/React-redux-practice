 export  const addTodo = (data) =>{
    return {
        type:"AddTodo",
        payload:{
            data
        }
    }
}

export  const onDragStart=(dragElement,dataTransfer,index,dragValue)=>{
    return {
        type:"Draglist",
        payload:{
            dragElement,
            dataTransfer,
            index,
            dragValue
        }
    }
}


export  const onDrop= (dropElement,dropValue) =>{
    return {
        type:"Droplist",
        payload:{
            dropElement,
            dropValue
        }
    }
}