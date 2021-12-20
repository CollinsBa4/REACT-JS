import React from 'react'

export const Form = () => {
    return (
        <div>
            <form method="post" action="https://github.com/users">
                <label for="fname">
                    Firstname
                </label>
                <br/>

                <input type="text" name="fname" id = "fname"/>
                <br/>
                <label for="lname">
                    Lastname
                </label>
                <br/>

                <input type="text" name="lname" id = "lname"/>
                <br/>

                <label for="age">
                    Age
                </label>
                <br/>

                <input type="number" name="age" id = "age"/>
                <br/>

                <p> Sex</p>
                <input type="radio" name="sex" id = "male"/>
                <label for="male">Male</label>
                <br/>

                <input type="radio" name="sex" id = "female"/>
                <label for="female">Female</label>
               <br/>
               <label for="Tribe">Continent</label>
               <br/>

               <select id="Tribe" name="Tribe">
                <option value="pizza">African</option>
                <option value="curry">Australian</option>
                <option value="salad">American</option>
                <option value="ramen">Asian</option>
                <option value="tacos">European</option>
               </select>
               <br/>

                
            </form>
        </div>
    )
}
