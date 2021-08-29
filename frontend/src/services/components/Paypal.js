// Predefined packages
import React, {useRef, useEffect} from 'react';

export const Paypal = ({total, setSuccessPay, setOrderId}) => {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Reservación de cupo para el mantenimiento de tu auto",
                            amount: {
                                currency_code : "USD",
                                value: total,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions)=>{
                const order = await actions.order.capture();
                console.log("Pago aprobado con éxito");
                setSuccessPay(c=>!c);
                setOrderId(data.orderID);
            },
            onError: (err)=>{
                console.log(err);
            }
        }).render(paypal.current);
    }, [total]);

    return (
        <div className="row m-3 animate__animated animate__bounceInLeft">
            <div className="col-12 mx-auto">
                <h4 className="perform-pay">Solo te queda realizar el pago...</h4>
            </div>
            <div ref={paypal} className="m-1 col-5 mx-auto"></div>
        </div>
    );
}
