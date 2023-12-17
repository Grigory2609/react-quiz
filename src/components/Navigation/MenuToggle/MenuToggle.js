import React from "react";
import classes from "./MenuToggle.css";

const MenuToggle = (props) => {
  const cls = [classes.MenuToggle, "material-symbols-outlined"];

  if (props.isOpen) {
    cls.push(classes.open);
  }

  return (
    <div className={cls.join(" ")} 
    onClick={props.onToggle}>
        {
            props.isOpen
            ? <span class="material-symbols-outlined">close</span>
            : <span class="material-symbols-outlined">menu</span>
        }
      
    </div>
  );
};

export default MenuToggle;

/* <i
        className={cls.join(' ')}
        onClick={props.onToggle}
        /> */
