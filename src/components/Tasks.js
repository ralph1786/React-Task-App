import React from "react";

const Tasks = props => {
  const taskList = props.tasks.length ? (
    props.tasks.map(task => {
      return (
        <div className="collection-item" key={task.id}>
          <span
            onClick={() => {
              props.deleteTask(task.id);
            }}
          >
            {task.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no tasks!</p>
  );

  return <div className="center collection">{taskList}</div>;
};

export default Tasks;
