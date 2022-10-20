export const initLogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
}