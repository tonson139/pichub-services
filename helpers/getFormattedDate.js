const getFormattedDate = () => {
    // YYYY-MM-DD HH:MM:SS = 2021-04-05 13:14:51
    const date = new Date();
    const Formatted = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + 
                date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return Formatted; 
}

module.exports = getFormattedDate;