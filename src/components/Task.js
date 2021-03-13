import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";

const TASKS_STATUSES = ["Unstarted", "In Progress", "Completed"];

const Task = (props) => {
  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }
  function onRemoveTask() {
    props.onRemoveTask(props.task.id);
  }
  return (
    <div>
      <form onChange={onStatusChange}>
        <select defaultValue={props.task.status}>
          {TASKS_STATUSES.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>
      </form>
      <h2
        className="card-title mt-3 text-uppercase px-2"
        style={{ color: "#384" }}
      >
        {props.task.title}
      </h2>
      <p className="card-text mb-3 text-muted font-weight-bold px-2">
        {props.task.description}
      </p>
      {/* <FontAwesomeIcon
        icon={faCheck}
        className="float-right m-2"
        style={{ color: "blue", cursor: "pointer" }}
      /> */}
      <FontAwesomeIcon
        icon={faTrash}
        className="float-right m-2"
        style={{ color: "tomato", cursor: "pointer" }}
        onClick={() => onRemoveTask(props.task.id)}
      />
    </div>
  );
};

export default Task;
