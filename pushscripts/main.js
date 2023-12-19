function main() {
    const calendar = CalendarApp.getDefaultCalendar();
    gettodayevents(calendar);
}

function gettodayevents(myCalendar) {
    //Googleカレンダーから取得するイベントの開始日(今日)を設定する
    let startDate = new Date();
    //Googleカレンダーから取得するイベントの終了日(1週間後)を設定する
    let endDate = new Date();
    endDate.setDate(startDate.getDate() + 7);
    //開始日～終了日に存在するGoogleカレンダーのイベントを取得する
    let myEvent = myCalendar.getEvents(startDate, endDate);
    //forループの処理で取得したイベントの件名をログ出力する
    myEvent.forEach(element => {
        //開始時間
        let starttime = element.getStartTime();
        let startstring = Utilities.formatDate(starttime, "JST", "HH:mm");
        //終了時間
        let endtime = element.getEndTime();
        let endstring = Utilities.formatDate(endtime, "JST", "HH:mm");
        //開始時間と終了時間を出力
        console.log(element.getTitle() + ":" + startstring + "~" + endstring);
    });
}