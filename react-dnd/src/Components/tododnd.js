import React, { useState } from 'react'
import { addTodo, onDragStart, onDrop } from "../Action/index"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button, FormGroup, Form, Input } from "reactstrap";


const TodoDND = () =>{

  const startedTodo = useSelector((state) => state.todoReducers.startedTodo);
  const completedTodo = useSelector((state) => state.todoReducers.completedTodo);
  const [task, setTask] = useState("");
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Form
      onSubmit={submitHandler}
      >
        <FormGroup 
        className="d-flex  justify-content-center p-4"
        
        >
          <Input
            type="text"
            name="text"
            id="text"
            value={task}
            className="w-50 border-bottom"
            onChange={(e) => setTask(e.target.value)}
            placeholder="What to do...."
          />
          <Button
            color="primary"
            className="add-btn"
            id="text"
            onClick={() => dispatch(addTodo(task))}>
            Add
          </Button>
        </FormGroup>

      </Form>


      <div className="row d-flex justify-content-center">

        <div
          className="list col-md-4 ms-3 d-flex flex-column"
          onDrop={(e) => dispatch(onDrop(e, "drop"))}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3 className='text-danger'>Started Todo list</h3>
          {
            startedTodo.map((elements, index) => (
              <p
                className="box"
                onDragStart={(e) => dispatch(onDragStart(e, elements, index, "drop"))}
                draggable={true}
                key={index}
              >
                {elements}
              </p>
            ))}
        </div>

        <div
          className="list offset-1 col-md-4 d-flex flex-column"
          onDrop={(e) => dispatch(onDrop(e, "drag"))}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3 className='text-danger'>Completed Todo list</h3>
          {
            completedTodo.map((elements, index) => (

              <p
                className="box"
                color="secondary"
                key={index}
                onDragStart={(e) => dispatch(onDragStart(e, elements, index, "drag"))}
                draggable={true}
              >
                {elements}
              </p>
            ))}
        </div>
      </div>
    </>

  )
}

export default TodoDND;