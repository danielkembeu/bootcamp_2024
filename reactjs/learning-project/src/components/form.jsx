import CustomTitle from "./title";
import "./form.css";

export default function Form() {
    return (
        <form>
            <CustomTitle title="My Form" />

            <input
                type="text"
                placeholder="Write something..."
            />
            
            <button>Confirm</button>
        </form>
    )
}