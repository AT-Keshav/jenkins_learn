
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pr resolved")
    }, 10000) // 10sec
})

const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pr1 resolved")
    }, 5000) //5sec
})

const handler = async () => {
    const pr_promise = await pr
    console.log("pr promise val: ")
    console.log(pr_promise)

    const pr1_promise = await pr1
    console.log("pr1 promise val: ")
    console.log(pr1_promise)
}

handler()

function getData() {
    pr.then((e) => console.log("pr: ", e)).catch((err) => console.log(err))

    pr1.then((e) => console.log("pr1: ", e)).catch((err) => console.log(err))
}

getData()

console.log(letFunction)

console.log(letFunction1)

function letFunction() {

}

const letFunction1 = () => {
    
}