import React, { useState } from "react";

const SimpleForm = () => {
  const [formdata, setformdata] = useState({name: '', email: '', 'phone': ''});
  const [isSubmit, setisSubmit] = useState(false);
  const [links, setlinks] = useState([{linkurl: ''}]);

  const inputChangeHandler = e => {
    const {name, value} = e.target
    setformdata({...formdata, [name]: value})
  }


  const linkChangeHandler = e => {
    //   const {name, value, id} = e.target
    //   setlinks([links[0], {[name]: value}])

    //   let tempLink = links[parseInt(id)];
    //   setlinks()
  }

  const incrementLinkChangeHandler = (e) => {
      e.preventDefault()
    setlinks([...links, {linkurl: ""}])
  }

  const decrementLinkChangerHandler = e => {
      e.preventDefault();
      const {id} = e.target
      let linksItem = links.filter((value, index) => id != index)
      setlinks(linksItem)
  }

  const formHandleSubmit = e => {
    e.preventDefault();
    setisSubmit(true);
  };
  return (
    <div>
      <form>
        <div className="form-group">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formdata.name}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group">
          Email
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formdata.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group">
          Phone
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formdata.phone}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group">
            <p>Important Link</p>
            {
                links.map((item, index) => (
                    <label key={index}>
                        <input type="text" name="linkurl" placeholder="Link" value={item.linkurl} onChange={linkChangeHandler} id={index}/>
                        <button onClick={decrementLinkChangerHandler} id={index}>-</button>
                    </label>
                ))
               
            }
           
            <p><button onClick={incrementLinkChangeHandler}>+</button></p>
        </div>
        <button
          onClick={e => {
            formHandleSubmit(e);
          }}
        >
          Submit
        </button>
        {isSubmit && (
          <div>
            <h1>Form Data</h1>
            <p>Name: {formdata.name}</p>
            <p>Email: {formdata.email}</p>
            <p>Phone: {formdata.phone}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SimpleForm;