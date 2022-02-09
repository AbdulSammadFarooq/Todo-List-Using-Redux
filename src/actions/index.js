export const addTodo = (data) => {
  return {
    type: "Add",
    payload:{
        id: new Date().getTime().toString(),
        data:data
    }
  };
};

export const deleteTodo = (id) => {
  return {
    type: "Delete",
    id,
  };
};

export const removeTodo = () => {
  return {
    type: "Remove",
  };
};
