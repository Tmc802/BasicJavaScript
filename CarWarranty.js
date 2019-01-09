<script type="text/javascript">   // check car warranty status, test by subtracting car year - current year. Test if the amount of years is greater than 5 OR if the milage is greater than 60,000. Return true if it is valid and false if it is not. Then push the result to a new array. Return the results to the screen.

    // create objects with client and car data
    let allClients = [
    client1 = {
        name: 'Tyler McIntyre',
        id: 1,
        age: 25,
        Make: 'Honda',
        Model: 'Accord',
        Year: 2013,
        milage: 50000,
        phone: 8027392204
    },

    client2 = {
        name: 'Mary Cutler',
        id: 2,
        age: 37,
        Make: 'Jeep',
        Model: 'Wrangler',
        Year: 2017,
        milage: 5493,
        phone: 3038499434
    },

    client3 = {
        name: 'Bill Ding',
        id: 3,
        age: 21,
        Make: 'Ford',
        Model: 'Explorer',
        Year: 1999,
        milage: 150254,
        phone: 7028761946
    },

    client4= {
        name: 'Mike Smith',
        id: 4,
        age: 29,
        Make: 'lamborghini',
        Model: 'Diablo',
        Year: 2018,
        milage: 2000,
        phone: 8025651173
    },

    client5 = {
        name: 'Earl Grey',
        id: 5,
        age: 55,
        Make: 'Ford',
        Model: 'ThunderBird',
        Year: 1979,
        milage: 20000,
        phone: 5641752256
    }
    ];

    let isValid = [];
    let isNotValid = [];
    

    function calcWarr(arr){
        
        for(let i = 0; i < arr.length; i++) {
            let WarrYears = 2019 - arr[i].Year;

            //push to 'not valid' array if car is less than 5 years from the current year
            // or push to array if the milage is over 60,000
            if (WarrYears >= 5 || arr[i].milage >= 60000) {
                isNotValid.push(arr[i].id, arr[i].name, arr[i].phone);

            //push to currently is valid if neither are true
            } else {
                isValid.push(arr[i]);
            }
        }
    }

    // use function to find all valid and non valid warranties of all clients in the database
    calcWarr(allClients);

    //Show currently valid warranties
    console.log(isValid);
    //show currently non valid warranties
    console.log(isNotValid);</script>