import { submitAction } from "../../action/form"
export default function Home() {
  return (
    <div>page
      
        <form action={submitAction}>
<label htmlFor="name"></label>
<input type="text" name="name" placeholder="enter you name"/>
<label htmlFor="address"></label>
<input type="text" name="address" placeholder="enter you adress"/>
<button>sumit</button>

        </form>
    </div>
  )
}
