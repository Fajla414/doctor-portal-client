import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        let newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        let newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone);


        fetch(`http://localhost:5000/addDoctor`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }

    return (
        <div className='container-fluid row'>
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9 mt-3">
                <h2 className="text-color">Add Doctor</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input onBlur={handleBlur} type="text" required className="form-control" name='name' placeholder='Name' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email </label>
                        <input onBlur={handleBlur} type="email" required className="form-control" name='email' placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone </label>
                        <input onBlur={handleBlur} type="phone" required className="form-control" name='phone' placeholder='Phone' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Upload a Imagae</label>
                        <input onChange={handleFileChange} type="file" required className="form-control" name='file' />
                    </div>
                    <button type="submit" className="btn bg-color text-light">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;