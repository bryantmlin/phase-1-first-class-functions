function receivesAFunction (cb)
{
    cb()
}
function returnsANamedFunction()
{
    return function LA () {
        console.log("this is named");
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        "idk"
    }
}