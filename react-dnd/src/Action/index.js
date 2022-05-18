 export  const addTodo = (data) =>{
    return {
        type:"AddTodo",
        payload:{
            data
        }
    }
}

export  const onDragStart=(e,p,i,dragValue)=>{
    return {
        type:"Draglist",
        payload:{
            e,
            p,
            i,
            dragValue
        }
    }
}


export  const onDrop= (ele,dropValue) =>{
    return {
        type:"Droplist",
        payload:{
            ele,
            dropValue
        }
    }
}