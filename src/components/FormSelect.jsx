import React from 'react'

const FormSelect = ({name,label,list,defaultValue,size}) => {
  return (
    <div>
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={`select select-bordered`}  
      >
        {list.map((item) => {

            return <option key={item} value={item} >
                {item}
            </option>
        })}
      </select>
    </div>
  )
}

export default FormSelect