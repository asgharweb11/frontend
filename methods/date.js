export const lastWeek = (n) => {
    // const d = new Date()
    const weekDay = new Array(7)
    weekDay[1] = "یکشنبه";
    weekDay[2] = "دوشنبه";
    weekDay[3] = "سه شنبه";
    weekDay[4] = "چهار شنبه";
    weekDay[5] = "پنج شنبه";
    weekDay[6] = "جمعه";
    weekDay[7] = "شنبه";

    return weekDay[n]
}
