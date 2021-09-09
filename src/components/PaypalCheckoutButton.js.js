import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout'

const PaypalCheckOutButton = ({order}) => {
    const paypalConf = {
        currency: 'USD',
        env: 'sandbox',
        client: {
            sandbox: '',
            production: 'id',
        },
        style: {
            label: 'pay',
            size: 'medium',
            shape: 'rect',
            color: 'gold'
        }
    };

    const PayPalButton = paypal.Button.driver("react", { React, ReactDOM });


    const payment = (data, actions) => {
        const payment = {
            transactions:[
                {
                amount:{
                    total: order.total,
                    currrency: paypalConf.currency
                },
                description:'compra en test app',
                custom: order.customer || '',
                item_list:{
                    items: order.items
                }
            }
            ],
            note_to_payer: 'contactanos para cualquier aclaracion'
        };
        return actions.payment.create({payment})
    }
    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
        .then(response => {
            console.log(response);
            alert(`el pago fue procesado correctamente, ID ${response.id}`)
        })
        .catch(error =>{
            console.log(error)
            alert('ocurrio un error ')
        } )
    }

    const onError = (error)  => {
        console.log(error);
        alert('el pago no fue realizado')
    }

    const onCancel = (data, actions) => {
        alert('pago no realizado se cancelo el proceso')
    }

    return (
        <PayPalButton
        env={paypalConf.env}
        client={paypalConf.client}
        payment={(data, actions) => payment(data, actions)}
        onAuthorize={(data, actions) => onAuthorize(data, actions)}
        onCancel={(data, actions) => onCancel(data, actions)}
        onError={(error) => onError(error)}
        style={paypalConf.style}
        commit
        locale="es_PA"
        />
    )
}

export default PaypalCheckOutButton