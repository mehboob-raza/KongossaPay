// app/api/paypal/webhook/route.js

import { NextResponse } from 'next/server';
import { parse } from 'querystring'; // For parsing webhook notification
import crypto from 'crypto';

// PayPal webhook verification
const PAYPAL_WEBHOOK_ID = process.env.PAYPAL_WEBHOOK_ID; // Your PayPal Webhook ID
const PAYPAL_SIGNATURE_SECRET = process.env.PAYPAL_SIGNATURE_SECRET; // Webhook secret

// Middleware to verify PayPal's webhook signature
async function verifyWebhookSignature(req) {
    const payload = await req.text(); // Get raw body as text
    const signature = req.headers['paypal-transmission-sig']; // PayPal signature header
    const transmissionId = req.headers['paypal-transmission-id'];
    const transmissionTime = req.headers['paypal-transmission-time'];
    const webhookId = req.headers['paypal-webhook-id'];

    // Construct a message to verify with PayPal's signature
    const message = [
        transmissionId,
        transmissionTime,
        payload,
        webhookId,
        PAYPAL_SIGNATURE_SECRET
    ].join('|');

    const expectedSignature = crypto
        .createHmac('sha256', PAYPAL_SIGNATURE_SECRET)
        .update(message)
        .digest('hex');

    if (signature !== expectedSignature) {
        throw new Error('Invalid PayPal signature');
    }

    return JSON.parse(payload); // Parse the PayPal notification payload
}

export async function POST(req) {
    try {
        // Step 1: Verify the webhook signature
        const payload = await verifyWebhookSignature(req);

        // Step 2: Handle the event (e.g., payment completed)
        const event = payload.event_type;
        if (event === 'PAYMENT.SALE.COMPLETED') {
            const paymentDetails = payload.resource;

            // Here, you can update your database with payment info.
            // Example: Update transaction status, notify the recipient, etc.
            console.log('Payment completed:', paymentDetails);

            // Example: Updating the payment status in your database
            // const paymentId = paymentDetails.id;
            // await prisma.payment.update({ where: { id: paymentId }, data: { status: 'completed' } });

            // Send a success response
            return NextResponse.json({ message: 'Webhook processed successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Event not handled' }, { status: 200 });
        }
    } catch (err) {
        console.error('Error processing PayPal webhook:', err);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
