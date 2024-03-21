import { useState } from "react"
const Row3 = () => {

    return (

        <>
            <div class="container text-center">
                <div class="row" style={{ margin: "1vh" }}>
                    <div class="col-6">
                        Do Homework for 2 hour
                    </div>
                    <div class="col-4">
                        21/3/2024
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row m">
                    <div class="col-6">
                        Do Homework for 1 hour
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Row3