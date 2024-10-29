import express from 'express';
import QRCode from 'qrcode';

const app = express();
const PORT = process.env.PORT || 6001;

const TELEGRAM_BOT_TOKEN = '7244531686:AAH06Gf4kwsY_2JNVmHULwOHittAJpQGRkY';
const TELEGRAM_BOT_URL = `https://t.me/${TELEGRAM_BOT_TOKEN}`;

app.get('/qrcode', async (req, res) => {
    try {
        const qrCodeDataUrl = await QRCode.toDataURL(TELEGRAM_BOT_URL);

        res.send(`<img src="${qrCodeDataUrl}" alt="QR Code for Telegram Bot" />`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error generating QR code');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://81.19.141.248:${PORT}`);
});
