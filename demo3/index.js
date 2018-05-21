function strTest1() {
    var str1 = 'Hello';
    var str2 = str1;
    str1 = 'Hello World';
    console.log(str1);
    console.log(str2);
}

function arrTest1() {
    var arr1 = [1, 2, 3];
    var arr2 = arr1;
    arr1.push(4);
    console.log(arr1);
    console.log(arr2);
}

function arrayShallowCopy1() {
    var arr1 = [1, 2, 3];
    var arr2 = arr1.concat();
    arr1.push(4);
    console.log(arr1);
    console.log(arr2);
}

function arrayShallowCopy2() {
    var arr1 = [1, 2, 3];
    var arr2 = arr1.slice(0);
    arr1.push(4);
    console.log(arr1);
    console.log(arr2);
}

function arrayShallowCopy3() {
    var arr1 = [1, 2, {name: 'Jack', age: 18}];
    var arr2 = arr1.concat();
    arr1.push(4);
    arr1[2].age = 20;
    console.log(arr1);
    console.log(arr2);
}

function objShallowCopy1() {
    var obj1 = {
        name: 'Jack',
        age: 18
    };
    var obj2 = copyObj(obj1);
    obj1.age = 20;
    console.log(obj1);
    console.log(obj2);

    function copyObj(obj) {
        var res = {};
        for (var key in obj) {
            res[key] = obj[key]
        }
        return res;
    }
}

function objShallowCopy2() {
    var obj1 = {
        name: 'Jack',
        age: 18,
        hobbies: {
            sports: 'Football',
            stars: 'Jay'
        }
    };
    var obj2 = copyObj(obj1);
    obj1.age = 20;
    obj1.hobbies.sports = 'Basketball';
    console.log(obj1);
    console.log(obj2);

    function copyObj(obj) {
        var res = {};
        for (var key in obj) {
            res[key] = obj[key]
        }
        return res;
    }
}

function objShallowCopy3() {
    var obj1 = {
        name: 'Jack',
        age: 18,
        hobbies: {
            sports: 'Football'
        }
    };
    var obj2 = JSON.parse(JSON.stringify(obj1));
    obj1.age = 20;
    obj1.hobbies.sports = 'Basketball';
    console.log(obj1);
    console.log(obj2);
}

function objShallowCopy4() {
    var obj1 = {
        name: 'Jack',
        age: 18,
        hobbies: {
            sports: 'Football'
        },
        fn: function () {

        }
    };
    var obj2 = JSON.parse(JSON.stringify(obj1));
    obj1.age = 20;
    obj1.hobbies.sports = 'Basketball';
    console.log(obj1);
    console.log(obj2);
}


function objShallowCopy5() {
    var obj1 = {
        name: 'Jack',
        age: 18,
        hobbies: {
            sports: 'Football'
        }
    };
    var obj2 = $.extend(true, {}, obj1);
    obj1.age = 20;
    obj1.hobbies.sports = 'Basketball';
    console.log(obj1);
    console.log(obj2);
}
