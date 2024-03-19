import { useState } from "react"
const Btn = () => {


    let [count, setCount] = useState(0)

    let btn = document.querySelector("#btn")



    return (

        <>
            <div class="container text-center">
                <div class="row m">
                    <div class="col-6">
                        <input type="text" placeholder="Enter a Todo" />
                    </div>
                    <div class="col-4">
                        <input type="date" />
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-success">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Btn