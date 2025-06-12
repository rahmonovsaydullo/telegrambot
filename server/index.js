import TelegramBot from 'node-telegram-bot-api';

const token = process.env.token;

const bot = new TelegramBot(token, { polling: true });

const bootstrap = () => {
    bot.on('message', async msg => {
        const chatId = msg.chat.id;
        const text = msg.text;

        if (text === '/start') {
            await bot.sendMessage(chatId, 'Here you can buy online courses',
            {
                reply_markup: {
                    keyboard: [
                        [
                            {
                                text: 'See courses',
                                web_app: {
                                    url: 'https://sammi.ac'
                                }
                            }
                        ]
                    ]
                }
            }
    )}
    });
};

bootstrap();
