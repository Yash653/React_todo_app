import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
// eslint-disable-next-line react/prop-types
export const Todolist=({data,checked,onHandleDeleteTodo,onHandldCheckedTodo})=>{
    return (
        <li>
        <div className="list">
          <span className={checked ? "checklist" : "notchecklist"}> {data}</span>
          <div className="btns">
            <button className="btn-check" onClick={()=>onHandldCheckedTodo(data)}>
              <RiCheckboxCircleLine />{" "}
            </button>
            <button className="btn-delete" onClick={()=>onHandleDeleteTodo(data)}>
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </li>
    )
};