import {ILaunch} from "./ILaunchinterface";


let launch: ILaunch = {
    mission_name: 'asdqwe',
    launch_date_local: 'qwerew',
    launch_site: {site_name_long: 'jklasjkl'},
    links: {article_link: null, video_link: 'asdasdasdasd'},
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
        }, second_stage: {payloads: [{payload_type: 'asdasdasd', payload_mass_kg: 123, payload_mass_lbs: 12312}]}

    }

};

const user: { name: string, age: number, gender: string } = {name: 'Mac', age: 18, gender: 'male'};


function sum(a: number, b: number): number {
    return a + b
}
function showSum(a:number,b:number):void{
    console.log(a + b);
}

function incAge(someUser, inc:number):object{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3);
incAge(user, 2);
console.log(user)
