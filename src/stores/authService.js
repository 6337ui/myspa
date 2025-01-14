import { useFetch } from '@vueuse/core';

// Функция для обработки запросов
const makeRequest = async (url, method, formData) => {
    // Используем useFetch с конфигурацией
    const { data, error, isLoading } = useFetch(url, {
        method,
        body: formData, // Отправка данных (автоматически сериализуется в JSON)
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    // Ожидаем завершения запроса
    await isLoading;

    // Проверяем наличие ошибки
    if (error.value) {
        throw new Error(`Ошибка при выполнении запроса: ${error.value.message || 'Неизвестная ошибка'}`);
    }

    // Возвращаем данные от сервера
    return data.value;
};

// Функция для регистрации
export const registerUser = (form) => {
    return makeRequest('/api/v1/customer/register', 'POST', form);
};

// Функция для логина
export const loginUser = (form) => {
    return makeRequest('/api/v1/customer/login', 'POST', form);
};
