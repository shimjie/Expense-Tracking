function clearList() {
    let el = document.getElementById('user_list');
    while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
    }
}

function getList() {
    //call api
    const url = "http://localhost:8080/api/users";
    try {
         axios.get(url).then((res) => {
             const users = res.data.userList;
             console.log("users", users);
             //拿到数据后 append数据到前端页面
             clearList();
    users.forEach((user) => {
        const li = document.createElement('li');
        li.innerHTML = `${user.name} ${user.age} `;
        document.getElementById('user_list').appendChild(li);
    });
    });
    } catch (e) {
        console.log('error', error);
    }
}

function updateList() {
    let userName = document.getElementById('name').value;
    let userAge = document.getElementById('age').value;

    //input data validation
    if (!userName || !userAge) {
        setTimeout(() => {
            document.getElementsByClassName('message')[0].innerHTML = 'name and age are required!';
        },2000)
        return;
    }

    //call api
    const url = "http://localhost:8080/api/user";
    const body = {
        name: userName,
        age: userAge,
    }

    try {
        // axios.post(url,body).then()
        axios({
            method: "post",
            url: url,
            data:body,
        }).then((res) => {
             const users = res.data.data;
             console.log("users", users);
             //拿到数据后 append数据到前端页面
             clearList();
    users.forEach((user) => {
        const li = document.createElement('li');
        li.innerHTML = `${user.name} ${user.age} `;
        document.getElementById('user_list').appendChild(li);
    });
    });
    } catch (e) {
        console.log('error', e);
    }
    userName = "";
    userAge = "";

}

function deleteList() {
    //call api
    const url = "/api/delete";
    try {
        axios.delete(url).then(clearList());
     } catch (e) {
        console.log('error',e)
    }
}
