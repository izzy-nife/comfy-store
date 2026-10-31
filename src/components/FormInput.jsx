import React from 'react'

const FormInput = ({label,defaultValue, name,type,size}) => {
  return (
    <div>
      <fieldset className="form-control">
        <label className="label" htmlFor="name">
          {label}
        </label>
        <input
          type={type}
          id="name"
          className={`input input-bordered ${size}`}
          name={name}
          defaultValue={defaultValue}
        />
      </fieldset>
    </div>
  )
}

export default FormInput