import axios from "axios"


// import.meta.env.VITE_API_URL

export const loginService = async (username: string, pass: string): Promise<void> => {
    try {
        const response = await axios.post(
            'http://localhost/todolistBack/user/login',
            {
                'username': username,
                'password': pass
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );

        const result = response.data;
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

