import "./signup.css"

export default function SignUp() {

  function signUp(formData) {
    const allData = Object.fromEntries(formData);
    allData.dietaryRestrictions = [...formData.getAll("dietaryRestrictions")]
    console.log(allData)
  }
 
  return (
    <section className="signup-section">
      <h1>Signup form</h1>
      <form action={signUp} className="signup-form">

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="Part-time"/>
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="Full-time"/>
            Full-time
        </label>
        </fieldset>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free"/>
            Gluten-free
        </label>
        </fieldset>

        <label htmlFor="favColor">Favorite Color:</label>
        
        <select name="favColor" defaultValue="Choose favorite color!">
          <option value="Choose favorite color!" disabled>What is your favorite color!</option>
          <option  value="red">Red</option>
          <option  value="blue">Blue</option>
          <option  value="green">Green</option>
          <option  value="white">White</option>
          <option  value="indigo">Indigo</option>
          <option  value="yellow">Yellow</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}


