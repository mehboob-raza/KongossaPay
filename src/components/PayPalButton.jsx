'use client';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function PayPalButton({ amount, onApprove }) {
    return (
        <PayPalScriptProvider options={{ 'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '' }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ amount: { value: amount } }],
                    });
                }}
                onApprove={async (data, actions) => {
                    const details = await actions.order?.capture();
                    console.log('Payment completed:', details);
                    await onApprove();
                }}
            />
        </PayPalScriptProvider>
    );
}
