import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./Todo.css";

const Todo = () => {
  const [data, setData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="parent">
        <div className="child input-icons">
          <p className="paragraph">Add Your List Here ✌️ </p>
          <input
            type="text"
            className="input"
            placeholder=" ✍️ Add items... "
            value={data}
            onChange={(event) => setData(event.target.value)}
          />
          <i
            className="fa fa-plus fa-1x icon"
            onClick={() => dispatch(addTodo(data), setData(""))}
          ></i>
        {/* <div className="items"> */}
          {list.map((element) => {
            return (
              <div key={element.id} className="data">
                <h3>{element.data}</h3>
                <i
                  className="fa fa-trash-alt add-btn fa-1x icon"
                  title="Delete Item"
                  onClick={() => dispatch(deleteTodo(element.id))}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Todo;
