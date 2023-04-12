export const api = (url, fun) => {
    axios
        .get(url)
        .then((res) => fun(res))
        .catch((error) => {
            console.log(error);
        });
}
