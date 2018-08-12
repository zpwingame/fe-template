const a = 1;
console.log(a)
let b = () => {
    console.log('hello')
}
function getSync() {

}
async function c() {
    await getSync();
    console.log('c')
}