import { gsap } from 'gsap';

export const messageMixin = {
    methods: {
        message(mes, status = null, dismissible = false, duration = 3000) {
            typeof mes === 'string' && (mes = {
                title: mes
            });
            const messages = document.getElementById('messages');
            messages.style.display = 'block';
            const childCount = messages.childElementCount;

            const interval = setInterval(() => {
                if (messages.childElementCount <= childCount) {
                    messages.style.display = 'none';
                    clearInterval(interval);
                }
            }, 500);

            const messageText = document.createElement('div');
            const messageTitle = document.createElement('div');
            const messageClose = document.createElement('span');
            const messageContent = document.createElement('div');
            const message = document.createElement('div');
            const messageTextInner = document.createElement('div');

            message.classList.add('message');
            status && message.classList.add(status);

            messageTitle.classList.add('message__title');
            messageTitle.textContent = mes.title;
            messageClose.classList.add('message__close');
            messageTitle.appendChild(messageClose);

            if (typeof mes.content !== typeof undefined) {
                messageContent.classList.add('message__content');
                messageContent.textContent = mes.content;
                messageTextInner.appendChild(messageContent);
            }

            messageTextInner.classList.add('message__text-inner');
            messageTextInner.appendChild(messageTitle);

            messageText.classList.add('message__text');
            messageText.appendChild(messageTextInner);

            message.appendChild(messageText);
            messages.insertBefore(message, messages.childNodes[0]);

            const currentMessage = messages.children[0];
            const mesWidth = currentMessage.querySelector('.message__text').offsetWidth;
            const mesHeight = currentMessage.querySelector('.message__text').offsetHeight;

            gsap.to(currentMessage, {
                height: mesHeight,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(currentMessage, {
                        marginRight: 0,
                        duration: 0.2,
                        onComplete: () => {
                            gsap.to(currentMessage, {
                                width: mesWidth,
                                opacity: 1,
                                duration: 0.5,
                                onComplete: () => {
                                    if (!dismissible) {
                                        setTimeout(() => {
                                            gsap.to(currentMessage, {
                                                width: 0,
                                                opacity: 0,
                                                duration: 0.5,
                                                onComplete: () => {
                                                    gsap.to(currentMessage, {
                                                        height: 0,
                                                        duration: 0.1,
                                                        onComplete: () => {
                                                            currentMessage.remove();
                                                        },
                                                    });
                                                },
                                            });
                                        }, duration);
                                    }

                                    messageClose.addEventListener('click', () => {
                                        clearTimeout(handler);
                                        gsap.to(currentMessage, {
                                            width: 0,
                                            opacity: 0,
                                            duration: 0.5,
                                            onComplete: () => {
                                                gsap.to(currentMessage, {
                                                    height: 0,
                                                    duration: 0.1,
                                                    onComplete: () => {
                                                        currentMessage.remove();
                                                    },
                                                });
                                            },
                                        });
                                    });
                                },
                            });
                        },
                    });
                },
            });

            let handler = null;
        },
    },
};