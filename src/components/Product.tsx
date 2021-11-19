import React, { useState } from 'react'
interface MyProps {
    id: Number,
    name: String,
    price: String,
    offer: String,
    rating: String,
}

interface modalInterface {
    show: any,
    handleClose: any

}

function Modal(props: React.PropsWithChildren<modalInterface>) {
    
    
}


function Product(props: React.PropsWithChildren<MyProps>) {
    const [show, setShow] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const showModal = () => {
        // this.setState({ show: true });
        setShow(true)
    };

    const hideModal = () => {
        // this.setState({ show: false });
        setShow(false)
    };
    const bookNow = (id: Number) => {
        // alert(id)
        setSuccessMsg(`${props.name} Hotel Booked Successfully`)
        showModal()
        return undefined
    }
    return (

        <div>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <h1>{successMsg}</h1>
                    <br />
                    <button type="button" onClick={hideModal}>

                        Close
                    </button>
                </section>
            </div>
            <div className="row">
                <div className="col">
                    <img style={{ width: '25%', height: '100%' }} src="https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5JTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="hotel-img" />
                    <div className="prodDetails">
                        <h2>{props.name}</h2>
                        <img style={{ width: '25%', height: 'auto' }} src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png" alt="rating" />
                        <h1>{props.price}</h1>
                        <p>{props.offer}</p>
                    </div>
                </div>
                <div className="col right">
                    <h3>{props.rating}</h3>

                    <button onClick={() => bookNow(props.id)} className="button">Book Now {props.id}</button>
                </div>
            </div>

        </div>
    )
}






export default Product
