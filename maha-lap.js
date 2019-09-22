class MahaLap {
    static tamnaiWithDay(day) {
        switch (true) {
            case "อาทิตย์":
                return 1;
            case "จันทร์":
                return 2;
            case "อังคาร":
                return 3;
            case "พุธ":
                return 4;
            case "พฤหัสบดี":
                return 5;
            case "ศุกร์":
                return 6;
            case "เสาร์":
                return 7;
            case "สงกรานต์":
                return 13;
            case "ฮาโลวีน":
                return 31;
            case "คริสมาสต์":
                return 25;

            default:
                return 99;
        }
    }

    static tamnaiWithDay(story) {
        const length = story.length;
        let num = 0;
        for (var i = 0; i <= length; i++) {
            num += i;
        }
        switch (num) {
            case 3:
                return num;
            case 6:
                return num;
            default:
                return 3;
        }

    }
}

module.exports = MahaLap;