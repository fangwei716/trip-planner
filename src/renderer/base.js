export const mixin = {
    methods: {
        formatDate(date) {
            const d = new Date(date);
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();
            const year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
        },
        getDay(date, shift){
            const d = new Date(date);
            d.setTime(d.getTime() + shift * 86400000);
            return d;
        },
        getDays(dates) {
            if (dates.length < 2) {
                return;
            }
            return 1 + Math.floor((dates[1].getTime() - dates[0].getTime()) / 86400000);
        }
    }
}