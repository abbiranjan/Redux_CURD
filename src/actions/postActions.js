import  mockJSON from '../json/mock.json';
export const fetchPosts = () => dispatch => {
    console.log('fetching', mockJSON);
    //Here in console I am getting data properly
    fetch('../json/mock.json')
        .then((res) => res.json())
        .then(function(data){
            console.log('data', data);
            //Here in console I am not getting data
        });
};