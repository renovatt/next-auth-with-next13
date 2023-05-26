export const verifyEmail = (email: string) => {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
}

export const verifyValidPassword = (password: string) => {
    const errors = [];

    if (password.length < 6) errors.push("A senha precisa ter pelo menos 6 caracteres.");
    if (!/[A-Z]/.test(password)) errors.push("A senha precisa ter pelo menos uma letra maiúscula.");
    if (!/[\W_]/.test(password)) errors.push("A senha precisa ter pelo menos um caractere especial.");
    if (!/^(?=.*[0-9])/.test(password)) errors.push("A senha precisa ter pelo menos um número.");

    return errors;
};