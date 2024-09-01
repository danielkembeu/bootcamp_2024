import "./title.css";

export default function CustomTitle({ title }) {
    return (
        <div className="container">
            <p>{title}</p>
            <span>✌️</span>
        </div>
    );
}