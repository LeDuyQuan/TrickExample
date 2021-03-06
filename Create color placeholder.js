//CSS
.placeholder-wrap {
    .placeholder {
        position: absolute;
        top: 40%;
        left: 10px;
        color: #9B9B9B;
        margin-top: -.5em;
        line-height: 1em;
        z-index: 9;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 18px;
        font-family: Source Sans Pro;
        letter-spacing: .4px;
        pointer-events: none;
    }
  
    input:focus + .placeholder,
    input[value]:not([value='']) + .placeholder,
    input.not-empty + .placeholder 
    {
       display: none;
    }
  }
  
  input {width: 300px;}
  .important {color: brown;}
  
  
// Javascript
<div className="placeholder">
    <input
      {...input}
      {...options}
      type={type}
      disabled={disabled}
      maxLength={maxLength}
      onKeyPress={onKeyPress}
      readOnly={readOnly} />
    <span className="placeholder">Last Name <b className="important">*</b></span>
</div>
