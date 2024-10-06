import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, AppointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = data => {
        data.serviece = AppointmentOn;
        data.date = date;
        data.create = new Date();



        fetch(`http://localhost:5000/addAppointment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Appointmennt created successfully.')
                    closeModal()
                }
            })
    }



    return (
        <div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" >
                <h2 className='text-color text-center'>{AppointmentOn}</h2>
                <p className='text-center text-secondary-subtle'><small>ON {date.toDateString()}</small></p>
                <form className='ship-form px-5 py-3' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group ">
                        <input type="text" name='name' placeholder='Enter Your Name' className='form-control' {...register("name", { required: true })} />
                        {errors.name && <span className='error text-danger'>Name is required</span>}
                    </div><br />
                    <div className="form-group ">
                        <input type="text" name='phone' placeholder='Enter Your Phone Number' className='form-control' {...register("phone", { required: true })} />
                        {errors.phone && <span className='error text-danger'>Phone is required</span>}
                    </div><br />
                    <div className="form-group ">
                        <input type="email" name='email' placeholder='Enter Your Email' className='form-control' {...register("email", { required: true })} />
                        {errors.email && <span className='error text-danger'>Email is required</span>}
                    </div><br />
                    <div className="form-group  row">
                        <div className="col-4">
                            <select name="" className='form-control' {...register("gender", { required: true })}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                            {errors.gender && <span className='error text-danger'>Gender is required</span>}
                        </div>
                        <div className="col-4">
                            <input type="text" name='age' placeholder='Age' className='form-control' {...register("age", { required: true })} />
                            {errors.age && <span className='error text-danger'>Age is required</span>}
                        </div>
                        <div className="col-4">
                            <input type="text" name='weight' placeholder='Weight' className='form-control' {...register("weight", { required: true })} />
                            {errors.weight && <span className='error text-danger'>Weight is required</span>}
                        </div>
                    </div><br />
                    <div className="form-group " style={{ textAlign: 'right' }}>
                        <button onClick={closeModal} className='btn btn-dark fw-bold text-light mx-4' >Close</button>
                        <button type='submit' className='btn bg-color fw-bold text-light'>Send</button>
                    </div>
                </form>

            </Modal>
        </div>
    );
};

export default AppointmentForm;