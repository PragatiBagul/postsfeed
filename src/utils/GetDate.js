export const getDate = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();
    return month + " " + day + ", " + year;
}
export const getDateFromTimestamp = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date(date) || new Date();
    let month = months[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();
    return month + " " + day + ", " + year;
}