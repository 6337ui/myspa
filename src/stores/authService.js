export const registerUser = async (firstName, lastName, email, password) => {
    try {
        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', password);

        const response = await fetch('http://localhost/api/v1/customer/register', {
            method: 'POST',
            headers: {
                accept: 'application/json',
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Ошибка при регистрации пользователя');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

// Функция для логина
export const loginUser = async (email, password) => {
    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('device_name', 'android');

        const response = await fetch('http://localhost/api/v1/customer/login', {
            method: 'POST',
            headers: {
                accept: 'application/json',
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Ошибка при входе пользователя');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};
