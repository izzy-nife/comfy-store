import React from 'react'

const FormCheckbox = ({label,name,defaultValue,size}) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize"> {label} </span>
      </label>
      <span className="font-bold text-md"> </span>
      <input
        type="checkbox"
        name={name}
        id=""
        defaultValue={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  )
}

export default FormCheckbox