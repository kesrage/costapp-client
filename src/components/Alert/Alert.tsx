import React from "react"
import { IAlertProps } from "../../types";
import './styles.css'

const Alert = ({props}: IAlertProps) => {
  return (
    <div className={`alert alert-wrapper alert-${props.alertStatus}`}>
      {props.alertText}
    </div>
  )
};

export default Alert;
