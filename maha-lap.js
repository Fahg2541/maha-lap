class MahaLap {
    static tamnaiWithDay(day) {
        const days = {
            อาทิตย์: 1,
            จันทร์: 2,
            อังคาร: 3,
            งู: 3,
            พุธ: 4,
            พฤหัสบดี: 5,
            ศุกร์: 6,
            เสาร์: 7,
            สงกรานต์: 13,
            ฮาโลวีน: 31,
            คริสมาสต์: 25
        };
        return days[day] ? days[day] : 99;
        // switch (true) {
        //     case "อาทิตย์":
        //         return 1;
        //     case "จันทร์":
        //         return 2;
        //     case "อังคาร":
        //         return 3;
        //     case "พุธ":
        //         return 4;
        //     case "พฤหัสบดี":
        //         return 5;
        //     case "ศุกร์":
        //         return 6;
        //     case "เสาร์":
        //         return 7;
        //     case "สงกรานต์":
        //         return 13;
        //     case "ฮาโลวีน":
        //         return 31;
        //     case "คริสมาสต์":
        //         return 25;

        //     default:
        //         return 99;
        // }
    }

    static tamnaiWithstory(story) {
        const length = story.length;
        let sum = 0;
        for (let i = 1; i <= length; i++) {
            sum += i;
        }
        return sum % 100;
    }
}

module.exports = MahaLap;