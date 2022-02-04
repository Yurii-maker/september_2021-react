"use strict";
exports.__esModule = true;
var launch = {
    mission_name: 'asdqwe',
    launch_date_local: 'qwerew',
    launch_site: { site_name_long: 'jklasjkl' },
    links: { article_link: null, video_link: 'asdasdasdasd' },
    rocket: {
        rocket_name: 'jkasdjklasjkld',
        first_stage: {
            cores: [
                {
                    flight: 1,
                    core: {
                        reuse_count: 24,
                        status: 'adsadsasd'
                    }
                }
            ]
        }, second_stage: { payloads: [{ payload_type: 'asdasdasd', payload_mass_kg: 123, payload_mass_lbs: 12312 }] }
    }
};
var user = { name: 'Mac', age: 18, gender: 'male' };
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
console.log(user);
