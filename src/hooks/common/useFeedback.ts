import { App } from 'antd';

export const useFeedback = () => {
    const { message, notification } = App.useApp();

    return {
        message,
        notification,
    };
};