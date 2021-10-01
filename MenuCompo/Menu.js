import React, { useState } from 'react'
import '../MenuCompo/Menu.css'

const Menu = (props) => {
    
    let[count,setCount]=useState(0);
    
    return (
        <div>
            
            <div className="cardsFlex">
                <div className="cardItem">
                    <img src="imageDash.jpg" alt="dish" style={{ width: '100px' }} />
                    <div className="cardDescp">
                        <h4>{props.ItemName}</h4>
                        <h4 style={{ color: 'red' }}>{props.Available}</h4>
                        <span style={{ textAlign: 'left', fontSize: '18pt' }}><b>{props.Price}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                        <button onClick={() => setCount(count + 1)}><b>Quantity {count}</b></button>
                    </div>
                </div>
                {/* <div className="cardItem">
                    <img src="imageDash.jpg" alt="dish" style={{ width: '100px' }} />
                    <div className="cardDescp">
                        <h4>{props.ItemName}</h4>
                        <h4 style={{ color: 'red' }}>{props.Available}</h4>
                        <span style={{ textAlign: 'left', fontSize: '18pt' }}><b>{props.Price}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                        <button onClick={() => setCount(count + 1)}><b>Quantity {count}</b></button>
                    </div>
                </div> */}
                {/* <div className="cardItem">
                    <img src="imageDash.jpg" alt="dish" style={{ width: '100px' }} />
                    <div className="cardDescp">
                        <h4>{props.ItemName}</h4>
                        <h4 style={{ color: 'red' }}>{props.Available}</h4>
                        <span style={{ textAlign: 'left', fontSize: '18pt' }}><b>{props.Price}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                        <button><b>Quantity</b></button>
                    </div>
                </div> */}
                {/* <div className="cardItem">
                    <img src="imageDash.jpg" alt="dish" style={{ width: '100px' }} />
                    <div className="cardDescp">
                        <h4>{props.ItemName}</h4>
                        <h4 style={{ color: 'red' }}>{props.Available}</h4>
                        <span style={{ textAlign: 'left', fontSize: '18pt' }}><b>{props.Price}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                        <button><b>Quantity</b></button>
                    </div>
                </div> */}
            </div>
            <div className="cardsFlex">
                {/* <div className="cardItem">
                    <img src="imageDash.jpg" alt="dish" style={{ width: '100px' }} />
                    <div className="cardDescp">
                        <h4>{props.ItemName}</h4>
                        <h4 style={{ color: 'red' }}>{props.Available}</h4>
                        <span style={{ textAlign: 'left', fontSize: '18pt' }}><b>{props.Price}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                        <button><b>Quantity</b></button>
                    </div>
                </div> */}
                {/* <div className="cardItem">
                    <img src="imageDash.jpg" alt="dish" style={{ width: '100px' }} />
                    <div className="cardDescp">
                        <h4>{props.ItemName}</h4>
                        <h4 style={{ color: 'red' }}>{props.Available}</h4>
                        <span style={{ textAlign: 'left', fontSize: '18pt' }}><b>{props.Price}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                        <button><b>{props.Quantity}</b></button>
                    </div>
                </div> */}
                {/* <div className="cardItem">
                    <img src="imageDash.jpg" alt="dish" style={{ width: '100px' }} />
                    <div className="cardDescp">
                        <h4>{props.ItemName}</h4>
                        <h4 style={{ color: 'red' }}>{props.Available}</h4>
                        <span style={{ textAlign: 'left', fontSize: '18pt' }}><b>{props.Price}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                        <button><b>{props.Quantity}</b></button>
                    </div>
                </div> */}
                {/* <div className="cardItem">
                    <img src="imageDash.jpg" alt="dish" style={{ width: '100px' }} />
                    <div className="cardDescp">
                        <h4>{props.ItemName}</h4>
                        <h4 style={{ color: 'red' }}>{props.Available}</h4>
                        <span style={{ textAlign: 'left', fontSize: '18pt' }}><b>{props.Price}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                        <button><b>{props.Quantity}</b></button>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Menu
