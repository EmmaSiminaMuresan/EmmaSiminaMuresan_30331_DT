function users() {

    get = function() {
        return axios.get("http://localhost:3000/users");
    }


    remove = function(index) {
        return axios.delete("http://localhost:3000/users" + index);
    }

    add = function(user) {
        return axios.put("http://localhost:3000/users", user);
    }

    update =  function(index, user) {
        return axios.post("http://localhost:3000/users/update/" + index, user);
    }

    return {
        get: get,
        remove: remove,
        add: add,
        update: update,
        
    }
}