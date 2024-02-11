const url = "https://jsonplaceholder.typicode.com/todos";

//fetching all todos

export const fetchTodo = async () => {
  let data = [];
  try {
    const responce = await fetch(url + "?userid=1");

    data = await responce.json();
    return {
      data,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

//function for creating new task
export const addTaskHandler = async (title, userid) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        userid,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

//deleting a task
export const deleteTask = async (id) => {
  try {
    await fetch(url + `/${id}`, {
      method: "DELETE",
    });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

//function for updating task
export const updateTask = async (task) => {
  try {
    const response = await fetch(url + `/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
